// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract Counter{
    //note -> always variable ake not public => unit public count ;

    uint count;  // uint -> unsigned int => (0-..)  ->  global state value
    // uint8(8 bits) , uint16 , uint256 (by default)  = 0

    // msg , block , tx variable -> global variable .

    // int8 , int256 -> int

    // address addr = 
    // bool = false
    // fixed
    // struct 
    // string

    // state variable declared inside contract but outside function 
    // local variable declared inside contract as well as inside fumction .

    function get() public view returns (uint){ // returning blockchain data
        return count;
    }

    function abc() public pure returns (uint) {  // pure function -> nothing to have blockchain data
        return 2+3; 
    }

    function inc() public{
        uint one = 1;  // local variable
        count = count + one;
    }

    function dec() public{
        count --;
    }

    // note -> gas will be charged only when we change the value .  
    // view -> no any gas will be charged 
    // get value -> no amount cut
    // inc , dec -> cut amount from account

    // create a calculator and save the data in the result stat variable (addition , subtraction) .
}