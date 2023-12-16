// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;
contract array
{
    uint[] public num = [1,2,3];
    // uint[4] public fixedArray ;

    function getValue() public view returns(uint[] memory)
    {
        return num;
    }

    // function getFixed() public view returns(uint[4] memory)
    // {
    //     return fixedArray;
    // }

    function length() public view returns(uint){
        return num.length; // 3
    }

    function addNum(uint add) public{
        num.push(add);
    }

    function remove() public {
        num.pop();
    }

    function removeAtIndex(uint index) public{
        delete num[index];  // remove the current element but tha value of that index becomes 0 , it is not shifting left bcause it is verycostly .
    }
}
