// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract CaseManager {

    // Structure to store case information

    struct Case {
        uint256 caseId;
        address plaintiff;
        address defendant;
        string charges;
        string newEvidence; 
        uint256 status;  // id 1 -> case filed , else not filed
    }

    // Mapping to store cases
    mapping(uint256 => Case) public cases;
    uint256 nextCaseId = 1;

    event CaseCreated(Case _case);

    // Function to create a new case
    function createCase(address plaintiff, address defendant, string memory charges , string memory newEvidence) public {
        Case memory newCase = Case(
            nextCaseId,
            plaintiff,
            defendant,
            charges,
            newEvidence, 
            1 // Status: Filed
        );

        cases[nextCaseId] = newCase;
        nextCaseId++;
        emit CaseCreated(newCase); 
    }

    event EvidenceAdded(uint256 caseId, string newEvidence);

    // Function to add evidence to a case
    function addEvidence(uint256 caseId, string memory  _newEvidence) public {
        Case storage _case = cases[caseId];
        _case.newEvidence = (_newEvidence);
        emit EvidenceAdded(caseId, _newEvidence );
    }

    event CaseStatusUpdated(uint256 caseId, uint256 newCaseId);

    // Function to update case status
    
    function updateCaseStatus(uint256 caseId, uint256 newCaseId) public {
        Case storage _case = cases[caseId];
        _case.status = newCaseId;
        emit CaseStatusUpdated(caseId, newCaseId);
    }

    // Function to get case information

    function getCase(uint256 caseId) public view returns (Case memory) {
        return cases[caseId];
    }
}
