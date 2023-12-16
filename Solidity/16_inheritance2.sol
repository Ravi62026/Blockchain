// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

// multiple inheritance

contract p1{
    function show() public virtual pure returns(string memory){
        return "In p1 show";
    }
}

contract p2{
    function show() public virtual pure returns(string memory){
        return "In p2 show";
    }
}

contract child is p1,p2{
    function show() public override(p1,p2) pure returns(string memory){
        // return "In child show";
        return super.show();
    }
}
