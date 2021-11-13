// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import 'hardhat/console.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract SimpleCounter {
	using SafeMath for uint256;

	uint256 number = 0;

	function addOne() public payable {
		number = number.add(1);
	}

	function subtractOne() public payable {
		number = number.sub(1, 'Cannot substract when current value is 0.');
	}

	function get() public view returns (uint256) {
		return number;
	}
}
