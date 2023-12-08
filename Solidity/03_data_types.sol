// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract primitive_type{
    bool public flag = true;
    uint8 public u8 = 4;
    int8 public i8 = -4;
    uint16 public u16 = 200;
    uint public u256 = 10000000;

    int public minInt = type(int).min;  // return min value of iteger
    int public maxInt = type(int).max;  // return max value of integer

    // grey color -> doesnot change the state of blockchain -> no gas fee required
    // orange color -> change the state of blockchain -> gas fee required

    address public addr = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;  // if we give some address which is not exist in any wallets of blockchain , it give immediate error .
    // 20 bytes or 160 bits  -> starting with 0x -> bytes data types (0xfa5bcde) 
    // 0x makes it payable -> ether transfer in this format also

    

}