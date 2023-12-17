// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract Payable {
    
    // payable address can send and recieve ether
    address payable public owner;

    // payable constructor can recieve ether
    constructor() payable {
        owner = payable(msg.sender);
    }

    // this function can recieve ether
    function deposit() public payable {}

    //this function can not accept ether
    function nonPayable() public{}

    // withdraw complete fund of current contract
    function withdraw() public {
        uint amount = address(this).balance;  // this -> point to current smart contract .
        
        // fall back function -> to handle unexpected error
        (bool success,) = owner.call{value:amount}("amount withdraw from smart contract");

        require(success,"failed to recieve/withdraw ether");
    }

    function transfer(address payable _to , uint _amount) public payable {
        (bool success,) = _to.call{value:_amount*(10**18)}("ether transferred");

        require(success , "failed to send ether to address");
    }


}
// 0xa9059cbb00000000000000000000000078731d3ca6b7e34ac0f824c42a7cc18a495cabab0000000000000000000000000000000000000000000000000000000000002710
// 0x00000000000000000000000078731d3ca6b7e34ac0f824c42a7cc18a495cabab0000000000000000000000000000000000000000000000000000000000002710