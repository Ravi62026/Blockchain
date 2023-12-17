// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract events{
    // event declaration
    // upto 3 parameter can be indexed
    // events help me to filter logs on the blockchain
    // we can evaluate condition on a combination of 3 parameter to filter out event messages
    

    event Log(address indexed sender , string indexed message , uint indexed id , uint b);
    event Event2();

    function testEventWorking() public {
        emit Log(msg.sender , "Blockchain is awesome" , 4 , 6);
        emit Log(msg.sender , "user created successfullyy!!!!" , 4 , 6);
        emit Event2();
    }
}
