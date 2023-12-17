// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

library removeElementAtIndex{
    // library dont use state variable , we never pass state variable
    function remove(uint[] storage arr , uint index) public {

        require(arr.length > 0 , "can;t remove element from array");

        // arr[index] = arr[arr.length-1];

        for(uint i = index ; i < arr.length-1 ; i++){
            arr[i] = arr[i+1];
        }

        arr.pop();
    }
}

contract TestArray{
    uint[] public arr ;

    using removeElementAtIndex for uint[];
    function testArrayRemoval() public returns(uint[] memory){
        
        for(uint i = 0 ; i < 4 ; i++){
            arr.push(i);
        }

        arr.remove(2);
        return (arr);
    }
}

