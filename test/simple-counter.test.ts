import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('SimpleCounter', () => {
	describe('get', () => {
		it('should get the current number count', async () => {
			const defaultNumber = 0;
			const SimpleCounter = await ethers.getContractFactory(
				'SimpleCounter'
			);
			const simpleCounter = await SimpleCounter.deploy();
			await simpleCounter.deployed();

			const storedValue = await simpleCounter.get();

			expect(storedValue).to.equal(defaultNumber);
		});
	});

	describe('addOne', () => {
		it('should add one to the current number count', async () => {
			const SimpleCounter = await ethers.getContractFactory(
				'SimpleCounter'
			);
			const simpleCounter = await SimpleCounter.deploy();
			await simpleCounter.deployed();

			await simpleCounter.addOne();
			const storedValue = await simpleCounter.get();

			expect(storedValue).to.equal(1);
		});
	});

	describe('subtractOne', () => {
		it('should subract one to the current number count', async () => {
			const SimpleCounter = await ethers.getContractFactory(
				'SimpleCounter'
			);
			const simpleCounter = await SimpleCounter.deploy();
			await simpleCounter.deployed();

			await simpleCounter.addOne(); // 1
			await simpleCounter.addOne(); // 2
			await simpleCounter.subtractOne(); //1

			const storedValue = await simpleCounter.get();

			expect(storedValue).to.equal(1);
		});
	});
});
