// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import Auth from the access-control subdirectory
import "./access-control/Auth.sol";

contract Box {
    uint256 private _value;
    Auth private _auth;

    // Event for when the value changes.
    event ValueChanged(uint256 value);

    constructor() {
        _auth = new Auth(msg.sender);
    }

    // Store a new value in the contract
    function store(uint256 value) public {
        // Require that the sender is authorized to store
        require(_auth.isAdministrator(msg.sender), "Only administrators can store");

        _value = value;
        emit ValueChanged(value);
    }

    // Read the last stored value
    function retrieve() public view returns (uint256 value) {
        return _value;
    }
}