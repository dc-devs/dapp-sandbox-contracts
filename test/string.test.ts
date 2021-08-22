import { expect } from 'chai';
import { ethers } from 'hardhat';

const { Contract } = ethers;

describe('String', () => {
	// TODO: Type string: Contract ??
	let string: any;

	beforeEach(async () => {
		const String = await ethers.getContractFactory('String');
		string = await String.deploy();
		// console.log(string);
	});

	describe('when contract deployed', () => {
		describe('getResult', () => {
			xit('should return 3', async () => {
				const result = await string.getResult();
				expect(result.toString()).to.be.equal('3');
			});
		});
	});
});
