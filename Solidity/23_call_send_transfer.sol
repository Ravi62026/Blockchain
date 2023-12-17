// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract sendingFunds{

    function sendEtherTransfer(address payable to) public payable{
        // this is not recomended
        to.transfer(msg.value);
    }

    function sendEtherSend(address payable to) public payable {
        bool send = to.send(msg.value);
        require(send , "failed to send ether");
    }

    function sendEtherCall(address payable to) public payable {
        (bool send,) = to.call{gas:10000,value:msg.value}("");
        require(send , "failed to send ether");
    }
}