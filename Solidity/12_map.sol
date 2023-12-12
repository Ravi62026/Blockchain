// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract mappings{
    // it is like switch case in solidity
    
    // mapping of address to uint
    // mapping is a user defined data types
    mapping(address => uint) public map1;

    function get(address _addr) public view returns(uint){
        return map1[_addr];
    }

    // Note -> never set value to zero .

    function set(address _addr , uint _i) public{
        // square bracket data is key
        map1[_addr] = _i ;
    }
}
