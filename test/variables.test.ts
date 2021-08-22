import { expect } from 'chai';
import { ethers } from 'hardhat';

const { Contract } = ethers;

describe('Variables', () => {
	// TODO: Type variables: Contract ??
	let variables: any;

	beforeEach(async () => {
		const Variables = await ethers.getContractFactory('Variables');
		variables = await Variables.deploy();
		// console.log(variables);
	});

	describe('when contract deployed', () => {
		describe('getResultLocalVars', () => {
			it('should return the result of an arithmatic equation using local vars', async () => {
				const result = await variables.getResultLocalVars();

				expect(result.toString()).to.be.equal('3');
			});
		});
		describe('getResultStateVar', () => {
			it("should return the state variable 'storedData' set during construction", async () => {
				const result = await variables.getResultStateVar();

				expect(result.toString()).to.be.equal('10');
			});
		});
		describe('getGlobalVars', () => {
			it('will just console.log all the global vars', async () => {
				await variables.getGlobalVars();

				expect(true).to.be.true;
			});
		});
	});
});
