import { expect } from 'chai';
import { ethers } from 'hardhat';

const { Contract } = ethers;

describe.only('Array', () => {
	// TODO: Type array: Contract ??
	let array: any;

	beforeEach(async () => {
		const Array = await ethers.getContractFactory('Array');
		array = await Array.deploy();
		// console.log(array);
	});

	describe('when contract deployed', () => {
		describe('testArray', () => {
			it('should conosle.log test stuffs', async () => {
				const result = await array.testArray();
				expect(true).to.be.equal(true);
			});
		});
	});
});
