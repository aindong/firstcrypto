// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Box {
    uint256 private _value;

    // Event for when the value changes.
    event ValueChanged(uint256 value);

    // Store a new value in the contract
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    // Read the last stored value
    function retrieve() public view returns (uint256 value) {
        return _value;
    }
}