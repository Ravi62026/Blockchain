// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

// enum :--> 

// set of predefined values / collection of values .
// sun , mon , tue , wed , thur , fri , sat
// better if enum have 3 - 8 value
// fractional value is not a good idea 
// output of enum is return the index in solidity

contract enum1{
    enum FreshJuice{small , medium , large}
    FreshJuice choice;
    FreshJuice constant defaultChoice = FreshJuice.large;

    function setLarge() public {
        choice = FreshJuice.large;
    }
    function setSmall() public {
        choice = FreshJuice.small;
    }

    function getChoice() public view returns(FreshJuice){
        return choice;
    }

    function getDefault() public pure  returns(uint){
        return uint(defaultChoice);
    }
}

// mapping in solidity -> maps one data types to another  (not an easy data types)

// in blockchain -> transaction has 2 meaning : 1. sending or receaving ether  2. function calling
