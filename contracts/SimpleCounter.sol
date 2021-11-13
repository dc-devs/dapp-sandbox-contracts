// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract SimpleCounter {
	// identifiers
	// --------------
	// contract names, function names and variable names

	// state variable
	// ---------------
	// You can think of it as a single slot in a database that
	// you can query and alter by calling functions of the code
	// that manages the database.
	uint256 number = 0;

	function addOne() public {
		number += 1;
	}

	function subtractOne() public {
		number -= 1;
	}

	function get() public view returns (uint256) {
		return number;
	}
}
