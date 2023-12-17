// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

abstract contract calcTemplate{
    function op() public virtual returns(uint);  // abstract

    function getValue() public pure returns(uint){
        return 1;
    }
}

// if there is only abstract function un contract -> then in place of abstract contract we canuse interface keyword , and in function -> in place of public we must declare external 
interface calctemplate {
    function op() external returns(uint);  // abstract
}

// when we deploy interface contract , we get error
// This contract may be abstract, it may not implement an abstract parent's methods completely or it may not invoke an inherited contract's constructor correctly.




contract add is calcTemplate{
    uint public num1;
    uint public num2;

    // override is optional from version 0.8.8 or above

    function op() public view override  returns(uint){
        return num1 + num2;
    }
}