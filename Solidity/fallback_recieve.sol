// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract fallbackrecieve
{
    string public called = "";
    uint public amount = 0;
    bytes public data;

    // first reference goes to receive function if both receive and fallback both defined .
    receive() external payable {
        called = "receive";
        amount = msg.value;
    }
    
    fallback() external payable {
        called = "fallback";
        amount = msg.value;
        data = msg.data;
    }
}

