// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract SimpleStorage {
	// identifiers
	// --------------
	// contract names, function names and variable names

	// state variable
	// ---------------
	// You can think of it as a single slot in a database that
	// you can query and alter by calling functions of the code
	// that manages the database. In this example
	uint256 storedData;

	function set(uint256 x) public {
		storedData = x;
	}

	function get() public view returns (uint256) {
		return storedData;
	}
}
