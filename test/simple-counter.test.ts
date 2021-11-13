import { expect } from 'chai';
import { ethers } from 'hardhat';
import Error from './enums/Error';

describe('SimpleCounter', () => {
	describe('get', () => {
		it('should get the current number count', async () => {
			const expectedValue = 0;
			const SimpleCounter = await ethers.getContractFactory(
				'SimpleCounter'
			);
			const simpleCounter = await SimpleCounter.deploy();
			await simpleCounter.deployed();

			const storedValue = await simpleCounter.get();

			expect(storedValue).to.equal(expectedValue);
		});
	});

	describe('addOne', () => {
		it('should add one to the current number count', async () => {
			const expectedValue = 1;
			const SimpleCounter = await ethers.getContractFactory(
				'SimpleCounter'
			);
			const simpleCounter = await SimpleCounter.deploy();
			await simpleCounter.deployed();

			await simpleCounter.addOne();
			const storedValue = await simpleCounter.get();

			expect(storedValue).to.equal(expectedValue);
		});
	});

	describe('subtractOne', () => {
		it('should subract one to the current number count', async () => {
			const expectedValue = 1;
			const SimpleCounter = await ethers.getContractFactory(
				'SimpleCounter'
			);
			const simpleCounter = await SimpleCounter.deploy();
			await simpleCounter.deployed();

			await simpleCounter.addOne(); // 1
			await simpleCounter.addOne(); // 2
			await simpleCounter.subtractOne(); //1

			const storedValue = await simpleCounter.get();

			expect(storedValue).to.equal(expectedValue);
		});
	});
	describe('when we subract one and the curent number count is 0', () => {
		it('should throw an error with a custom message, and revert the tansaction', async () => {
			const expectedValue = 0;
			const SimpleCounter = await ethers.getContractFactory(
				'SimpleCounter'
			);
			const simpleCounter = await SimpleCounter.deploy();
			await simpleCounter.deployed();

			await expect(simpleCounter.subtractOne()).to.be.revertedWith(
				Error.SubtractOverflow
			);

			const storedValue = await simpleCounter.get();
			expect(storedValue).to.equal(expectedValue);
		});
	});
});
