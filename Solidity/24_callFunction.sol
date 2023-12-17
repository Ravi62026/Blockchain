// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract callContract{
    string public str = "blockchain";

    // if 1 ether is sent in msg.value , then update the string
    function updateStrig(string memory newString) public payable returns(uint , uint){

        uint startGas1 = gasleft();
        
        require(msg.value == 1 ether);
        str = newString;
        address payable owner = payable(msg.sender);
        
        (bool success ,) = owner.call{value : msg.value}("");
        require(success , "Failure");

        return (startGas1 , startGas1-gasleft());
    }
}