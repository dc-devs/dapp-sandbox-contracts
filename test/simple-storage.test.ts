import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('SimpleStorage', () => {
	describe('set', () => {
		it('should set a stored value', async () => {
			const SimpleStorage = await ethers.getContractFactory(
				'SimpleStorage'
			);
			const simpleStorage = await SimpleStorage.deploy();
			const setValue = 5;

			await simpleStorage.deployed();

			await simpleStorage.set(setValue);
			const storedValue = await simpleStorage.get();

			expect(storedValue).to.equal(setValue);
		});
	});
	describe('get', () => {
		it('should get a stored value', async () => {
			const SimpleStorage = await ethers.getContractFactory(
				'SimpleStorage'
			);
			const simpleStorage = await SimpleStorage.deploy();
			const setValue = 5;

			await simpleStorage.deployed();

			await simpleStorage.set(setValue);
			const storedValue = await simpleStorage.get();

			expect(storedValue).to.equal(setValue);
		});
	});
});
