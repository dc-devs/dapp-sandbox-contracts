// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

// Scope of local variables is limited to function
// in which they are defined but State variables can
// have three types of scopes.

// Public − Public state variables can be accessed
// internally as well as via messages. For a public state variable,
// an automatic getter function is generated.

// Internal − Internal state variables can be accessed only
// internally from the current contract or contract deriving
// from it without using this.

// Private − Private state variables can be accessed only
// internally from the current contract they are defined not
// in the derived contract from it.

// LEARNINGS: If you change a the value of a state variable it
// causes a trasaction to take place, hence, you
// cannot just call a function and expect the value
// to be returned upon calling, it will instead return a
// transaction receipt.

// If you want to collet data, you can emit an event
// In this case you can use the hardhat test examples to
// confirm new values, or listen to an event emitted
// or try to derive the value of the log from the 'data'
// field in the transaction receipt.

contract VSContractOne {
	uint256 public publicData = 30;
	uint256 internal internalData = 10;
	event ReturnEvent(string value, uint256 data);

	function returnPublicData() public returns (uint256) {
		publicData = 3; // internal access

		emit ReturnEvent('publicData', publicData);

		return publicData;
	}
}

contract VSCaller {
	VSContractOne contractOne = new VSContractOne();

	function returnPublicData() public view returns (uint256) {
		return contractOne.publicData(); //external access
	}
}

contract VSContractTwo is VSContractOne {
	function returnInternalData() public returns (uint256) {
		internalData = 3; // internal access
		emit ReturnEvent('internalData', internalData);

		return internalData;
	}

	function getResult() public view returns (uint256) {
		uint256 a = 1; // local variable
		uint256 b = 2;
		uint256 result = a + b;
		return publicData; //access the state variable
		// return storedData; //access the state variable
	}
}
