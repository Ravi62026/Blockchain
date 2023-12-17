// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract called{
    event callEvent(address sender , address origin , address from);
    function callThis() public{
        emit callEvent(msg.sender , tx.origin , address(this));
    }
}

// EOA -> SC1 -> SC2 -> SC3 -> SC4 -> SC5 , we are in context of sc2

contract caller{
    function makeCall(address contractAddress) public {
        address(contractAddress).call(abi.encodeWithSignature("callThis()"));
        
        // (bool success ,) = contractAddress.call(abi.encodeWithSignature("callThis"));
        // require(success , "Function call failed");
    }

    // in abi -> data is in form of key and value only .
}