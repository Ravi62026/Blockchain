// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract account{
    mapping (address => uint) balance;
    address public owner;

    constructor(){
        owner = msg.sender;
    }

    function addBalance(uint amt) public{
        require(msg.sender == owner , "stay in your limit");  // for coming from outside world 

        uint a = 4;
        uint b = 5;
        uint c = a + b;

        assert(c == 9);  // for internal checking
        balance[msg.sender] += amt;
    }

    function getBalance() public view returns(uint){
        return balance[msg.sender];
    }

    function transfer(address to , uint amount) public {
        // if(balance[msg.sender] < amount){
        //     revert("you dont have enough balance");
        // }

        require(balance[msg.sender] > amount , "Insufficient balance");
        balance[msg.sender] -= amount;
        balance[to] += amount;
    }
}