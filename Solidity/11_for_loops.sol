// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract forLoop{
    int[] arr;
    function loop() public returns (int[] memory){
        for(int i = 1 ; i <= 10 ; i++){
            arr.push(i);
        }
        return arr;
    }
}
