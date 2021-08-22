// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import 'hardhat/console.sol';

contract Variables {
	uint256 storedData; // State variable

	constructor() {
		storedData = 10; // Using State variable
	}

	function getResultLocalVars() public pure returns (uint256) {
		uint256 a = 1; // Local variable
		uint256 b = 2; // Local variable

		uint256 result = a + b;

		return result;
	}

	function getResultStateVar() public view returns (uint256) {
		return storedData;
	}

	function getGlobalVars() public payable {
		console.logString('');

		console.logString('block.coinbase (address payable)');
		console.logString('Current block miners address');
		console.logAddress(block.coinbase);
		console.logString('');

		console.logString('block.difficulty (uint)');
		console.logString('Current block difficulty');
		console.logUint(block.difficulty);
		console.logString('');

		console.logString('block.gaslimit (uint)');
		console.logString('Current block gaslimit');
		console.logUint(block.gaslimit);
		console.logString('');

		console.logString('block.number (uint)');
		console.logString('Current block number');
		console.logUint(block.number);
		console.logString('');

		console.logString('block.timestamp (uint)');
		console.logString(
			'Current block timestamp as seconds since unix epoch'
		);
		console.logUint(block.timestamp);
		console.logString('');

		console.logString('gasleft() (uint256)');
		console.logString('Remaining gas');
		console.logUint(gasleft());
		console.logString('');

		console.logString('gasleft() (uint256)');
		console.logString('Remaining gas');
		console.logUint(gasleft());
		console.logString('');

		console.logString('msg.data (bytes calldata)');
		console.logString('Complete calldata');
		console.logBytes(msg.data);
		console.logString('');

		console.logString('msg.sender (address payable)');
		console.logString('Sender of the message (current caller)');
		console.logAddress(msg.sender);
		console.logString('');

		console.logString('msg.sig (bytes4)');
		console.logString(
			'First four bytes of the calldata (function identifier)'
		);
		console.logBytes4(msg.sig);
		console.logString('');

		console.logString('msg.value (uint)');
		console.logString('Number of wei sent with the message');
		console.logUint(msg.value);
		console.logString('');

		console.logString('tx.gasprice (uint)');
		console.logString('Gas price of the transaction');
		console.logUint(tx.gasprice);
		console.logString('');

		console.logString('tx.origin (address payable)');
		console.logString('Sender of the transaction');
		console.logAddress(tx.origin);
		console.logString('');
	}
}
