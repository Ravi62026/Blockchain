// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract Acount{
    address public senderAddress;
    uint public balance;

    function setAddressAndBalance() public {
        senderAddress = msg.sender;
        balance = msg.sender.balance;
    }

    function transfer(address payable to) public payable {
        to.transfer(msg.value);
    }
}
