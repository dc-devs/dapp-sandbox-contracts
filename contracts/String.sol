// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import 'hardhat/console.sol';

contract String {
	constructor() {}

	function getResult() public pure returns (string memory) {
		uint256 a = 1;
		uint256 b = 2;
		uint256 result = a + b;
		return integerToString(result);
	}

	function integerToString(uint256 _i) internal pure returns (string memory) {
		if (_i == 0) {
			return '0';
		}
		uint256 j = _i;
		uint256 len;

		while (j != 0) {
			len++;
			j /= 10;
		}
		bytes memory bstr = new bytes(len);
		uint256 k = len - 1;

		while (_i != 0) {
			bstr[k--] = bytes1(uint8(48 + (_i % 10)));
			_i /= 10;
		}
		return string(bstr);
	}
}
