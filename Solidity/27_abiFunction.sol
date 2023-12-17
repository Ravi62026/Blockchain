// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract EncodeDecode{

    function encode(string memory str1 , uint int1 , string memory str2) public pure returns(bytes memory){
        return (abi.encode(str1 , int1 , str2));
    }

    function decode(bytes memory data) public pure returns(string memory str1 , uint int1 , string memory str2){
        (str1 , int1 , str2) = abi.decode(data,(string , uint , string));
    }
}

