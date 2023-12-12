// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

// view function declares that no state variable will be changed .
// view function declares that no state variable will be changed or read .
// data hiding -> abstrsction .
// view -> partial  abstraction .
// pure -> complte abstraction .

contract viewPure{
    int x = 1;
    function addviw(int y) public view returns(int){
        return x + y;
        // x = x + 4 -> not possible , because function is of viw form .
    }


    // function AddX(int z) public pure returns(int){
    //     // int d = x + z;  // we get error as we not read state if we dclared as view .
    // }

    function addpure(int i , int j) public pure returns(int){
        int d = i + j;
        return d;
    }
}

// deploy by 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2   this account store byte code or opcode .
// call by 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db  =. gas will not be used in this cas .
