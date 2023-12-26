// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentManagement {
    // Structure to represent a document{
    string public title;
    string public content;
    address public owner;
    uint public documentId;
    bool public isPublic;

    // set document 
    
    function setDocument() public {
        owner = msg.sender;
        title = "Judiciary";
        content = "Evidence";
        documentId = 42;
        isPublic = true;
    }

    event DocumentCreated(uint256 documentId, string title, address owner, bool isPublic);

    // // Modifier to restrict access to document owners
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    // create new document 
    function createDocument(string memory _title, string memory _content, bool _isPublic) public {
        title = _title;
        content = _content;
        owner = msg.sender;
        documentId = uint256(keccak256(abi.encodePacked(_title, msg.sender, block.timestamp)));
        isPublic = _isPublic;
        emit DocumentCreated(documentId, title, owner, isPublic);
    }

    // // Get document details

    function getDocument() public view onlyOwner() returns (string memory, string memory, address, bool) {
        return (title, content, owner, isPublic);
    }


    // Update document content (only owner)  (Done)
    function updateDocument(string memory _newContent) public onlyOwner() {
        content = _newContent;
    }

     // Make a document public (only owner)
    function makeDocumentPublic() public onlyOwner() {
        isPublic = true;
    }
}
