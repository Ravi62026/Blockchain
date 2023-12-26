// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

contract CaseData {
    mapping(uint256 => string) private encryptedData; // Stores encrypted data

    function storeData(uint256 key, string memory data) public {
        encryptedData[key] = data;
    }

    function retrieveData(uint256 key) public view returns (string memory) {
        return encryptedData[key];
    }
}

contract EncryptionManager {

    mapping(address => uint256) private userKeys; // Maps user addresses to their encryption keys

    function generateKey() public returns (uint256) {
        // Generate a key based on the user's address and current timestamp
        uint256 key = uint256(keccak256(abi.encodePacked(msg.sender, block.timestamp , msg.sender)));
        userKeys[msg.sender] = key;
        return key;
    }

    function getKey() public view returns (uint256) {
        // Retrieve the user's encryption key
        return userKeys[msg.sender];
    }

    function encryptData(string memory data) public view returns (bytes memory) {
        require(userKeys[msg.sender] != 0, "Encryption key not generated");
        
        // Simple XOR encryption for illustration purposes

        uint256 key = userKeys[msg.sender];
        bytes memory encryptedDataBytes = new bytes(bytes(data).length);
        for (uint256 i = 0; i < bytes(data).length; i++) {
            encryptedDataBytes[i] = bytes(data)[i] ^ bytes32(key)[i % 32];
        }
        return bytes(encryptedDataBytes);
    }

    function decryptData(bytes memory encryptedData, address user) public view returns (string memory) {
        // Decrypt data using the user's encryption key
        uint256 key = userKeys[user];
        require(key != 0, "Encryption key not found for the specified user");

        bytes memory decryptedDataBytes = new bytes(bytes(encryptedData).length);
        for (uint256 i = 0; i < bytes(encryptedData).length; i++) {
            decryptedDataBytes[i] = bytes(encryptedData)[i] ^ bytes32(key)[i % 32];
        }
        return string(decryptedDataBytes);
    }
}
