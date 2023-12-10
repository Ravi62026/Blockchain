// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;
contract greatestNumber{
    int a ;
    int b;
    int c;
    int ans;

    function setA(int input) public {
        a = input;
    }

    function setB(int input) public {
        b = input;
    }

    function setC(int input) public {
        c = input;
    }

    function greatest() public{
        if(a > b && a > c){
            ans = a;
        }
        else if(b > c){
            ans = b;
        }
        else{
            ans = c;
        }
    }

    function greatest_number() public view returns(int){
        return ans;
    }
}
