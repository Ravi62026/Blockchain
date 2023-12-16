// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract Computer
{
    function compute() public pure returns(string memory){
        return "computing...";
    }
    
    function show() public virtual  pure returns(string memory){
        return "just a concept";
    }
}

contract laptop is Computer{
    function show() public override pure returns(string memory){
        return "i5, 16gb ram , 1tb";
    }
}
