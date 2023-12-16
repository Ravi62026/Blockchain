// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract array{
    uint[] arr = [1,2,3,4,5];

    function show() public view returns(uint[] memory){
        return arr;
    }
    function deleteIndex(uint idx) public{
        for (uint i = idx; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }
}
