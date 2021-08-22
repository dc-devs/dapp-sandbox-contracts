// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import 'hardhat/console.sol';

contract Array {
	function testArray() public pure {
		//dynamic array
		uint256[] memory a = new uint256[](3);

		a[0] = 1;
		a[1] = 1;
		a[2] = 1;

		//bytes is same as byte[]
		bytes memory b = new bytes(3);

		b[0] = '1';
		b[1] = '1';
		b[2] = '1';

		//static array
		uint256[3] memory staticArray = [uint256(1), uint256(1), uint256(1)];
		assert(staticArray.length == 3);
	}
}
