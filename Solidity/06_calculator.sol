// SPDX-License-Identifier: MIT

pragma solidity 0.8.3;

contract cal{
    int a;
    int b;
    int ans ;

    function setA(int input) public{
        a = input;
    }

    function setB(int input) public{
        b = input;
    }

    function add() public {
        ans = a + b; 
    }

    function sub() public {
        ans = a - b; 
    }

    function mul() public {
        ans = a * b; 
    }

    function div() public {
        ans = a / b; 
    }

    function remainder() public {
        ans = a % b; 
    }

    function getAns() public view returns(int){
        return ans;
    }
}
