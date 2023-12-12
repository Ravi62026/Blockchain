// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract loop{
    // array in solidity -> dynamic array because length are not provided .
    // solidity does not allow print statement .
    int[] arr ;
    int j = 0;
    function loop1() public returns(int[] memory){  // memory keyword allocat dynamic memory .  because solidity store only one value at a time by default . 
        while(j<10){
            j++;
            arr.push(j);   
        }
        return arr;
    }
}
