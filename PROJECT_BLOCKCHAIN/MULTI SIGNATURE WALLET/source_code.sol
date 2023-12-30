// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract multi_sig_wallet{

    event Deposit(address indexed sender , uint amount , uint balance);

    event SubmitTransaction(
        address indexed owner ,
        uint indexed txIndex ,
        address indexed to ,
        uint value ,
        bytes data
    );

    event ConfirmTransaction(address indexed owner , uint indexed txIndex);

    event RevokeTransaction(address indexed owner , uint indexed txIndex);

    event ExecuteTransaction(address indexed owner , uint indexed txIndex);

    address[] public  owners; // array of owner all the owner who initialize in the begining are store in this array 

    mapping (address => bool) public isOwner ; // tell weather address is owner or not

    uint public numConfirmationsRequired;

    struct Transaction {  // represents individual transaction 
        address to;
        uint value;
        bytes data;
        bool executed;
        uint numConfirmations;
    }

    mapping (uint => mapping (address => bool)) public isConfirmed ; // 2/5, 3/5  weather that particular transaction is confirmed or not based on owner // uint - transaction id , mapped with owner and its signature // majority voting is checked 

    Transaction[] public  transactions;

    modifier onlyOwner(){
        require(isOwner[msg.sender] , "Not the owner");
        _;
    }

    modifier txExist(uint _txIndex){  // it shows if 1 transaction then index is 0 , 2 transaction then txIndex 1 ans do on ..  // 
        require(_txIndex < transactions.length , "transaction does not exisr");
        _;
    }

    modifier notExecuted(uint _txIndex){
        require(!transactions[_txIndex].executed , "tx already executed");
        _;
    }

    modifier notConfirmed(uint _txIndex){
        require(!isConfirmed[_txIndex][msg.sender] , "tx already confirmed") ;
        _;
    }

    constructor(address[] memory _owners , uint _numConfirmationsRequired){
        require(_owners.length > 0 , "at least one owner required");
        require(_numConfirmationsRequired > 0 && _numConfirmationsRequired <= _owners.length , "Invalid number of required confirmation in constructor");

        for(uint i = 0 ; i < _owners.length ; i++){
            address owner = _owners[i];
            require(owner != address(0) , "Invalid owner");  // we dont want an invalid owner and empty address
            require(!isOwner[owner] , "owner not unique");  // we want unique address , not repeatition
            isOwner[owner] = true;
            owners.push(owner);
        }
        numConfirmationsRequired = _numConfirmationsRequired;
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value, address(this).balance);
    }

    function confirmTransaction(uint _txIndex) public onlyOwner txExist(_txIndex) notExecuted(_txIndex) notConfirmed(_txIndex){
        Transaction storage transaction = transactions[_txIndex];  // creating instant of struct Transaction 
        transaction.numConfirmations += 1;
        isConfirmed[_txIndex][msg.sender] = true;
        emit ConfirmTransaction(msg.sender , _txIndex);
    }

    function submitTransaction(address _to, uint _value, bytes memory _data) public onlyOwner{

        uint txIndex = transactions.length;

        transactions.push(
            Transaction({
                to : _to,
                value : _value,
                data : _data,
                executed : false,
                numConfirmations : 0
            })
        );
        emit SubmitTransaction(msg.sender, txIndex, _to, _value, _data);
    }

    function executeTransaction(uint _txIndex) public  onlyOwner txExist(_txIndex) notExecuted(_txIndex){

        Transaction storage transaction = transactions[_txIndex];  // creating instant of struct Transaction 
        transaction.executed = true;
        (bool success,) = transaction.to.call{value:transaction.value}(transaction.data) ;
        require(success , "transaction failed");
        emit ExecuteTransaction(msg.sender , _txIndex);
    }

    function revokeConfirmation(uint _txIndex) public onlyOwner txExist(_txIndex) notExecuted(_txIndex){
        Transaction storage transaction = transactions[_txIndex];
        require(isConfirmed[_txIndex][msg.sender] , "tx is not confirmed");
        transaction.numConfirmations -= 1;
        isConfirmed[_txIndex][msg.sender] = false;
        emit RevokeTransaction(msg.sender , _txIndex);
    }

    function getOwner() public view returns(address[] memory){
        return owners;
    }

    function getTransactionCount() public view returns(uint){
        return transactions.length;
    }

    function getTransaction(uint _txIndex) public view returns(address to , uint value , bytes memory data , bool expected , uint numConfirmations){
        Transaction storage transaction = transactions[_txIndex];
        return(transaction.to , transaction.value , transaction.data , transaction.executed , transaction.numConfirmations);
    }
}
