// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract Function{

    // function to return multiple value

    function returnMultiple() public pure returns(uint,bool,uint){
        return (1,true,5);
    }

    function returnName() public pure returns(uint x,bool b,uint c){
        return (1,false,10);
    }

    function assignValue() public pure returns(uint x , bool b , int z ){
        x = 9;
        // b = true;
        z = -4;
        return(x,b,z);
    }

    // default value for -> uint - 0 , bool -> false

    function destructuring() public pure returns(uint,bool,uint,uint,uint){
        (uint i , bool b , uint j) = returnMultiple();
        (uint x ,,uint y) = (10,15,20);

        return (i,b,j,x,y);
    }
}

contract secondContract{
    function secondFunctionContract(address a , bool b ) public view  returns(address , bool){
        return (a,b);
    }

    function callFunction() external view  returns(address,bool){
        return secondFunctionContract(address(0),true);
    }

    // msg.sender -> who ever is calling this function , whose address us used .
    // msg.sender -> it is a state variable .
    // msg.sender.balance -> give the remaining balance in account .

    function callWithKeyValue() external view  returns(address , bool){
        return secondFunctionContract({a:address(0) , b:true});
    }



}
