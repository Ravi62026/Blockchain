// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract ifElse{
    // function conditions(int x) public pure returns(int){
    //     if(x>10){
    //         return 0;
    //     }
    //     else if(x<10){
    //         return 1;
    //     }
    //     else{
    //         return 2;
    //     }
    // }

    function ques1(int x) public pure returns(int){
        if(x>=0 && x<=10){
            return 1;
        }
        else if(x>10 && x<=20){
            return 2;
        }
        else if(x>20 && x<=30){
            return 3;
        }
        else if(x>30){
            return 4;
        }
        else{
            return 5;
        }
    }
}
