import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('VariableScope', () => {
	let caller: any;
	let contractOne: any;
	let contractTwo: any;

	beforeEach(async () => {
		const VSContractOne = await ethers.getContractFactory('VSContractOne');
		contractOne = await VSContractOne.deploy();

		const VSCaller = await ethers.getContractFactory('VSCaller');
		caller = await VSCaller.deploy();

		const VSContractTwo = await ethers.getContractFactory('VSContractTwo');
		contractTwo = await VSContractTwo.deploy();
	});

	describe('when contracts deployed', () => {
		describe('VSContractOne', () => {
			describe('VSContractOne', () => {
				describe('returnPublicData', () => {
					it('should return event of public data updated internally in function', async () => {
						const expectedPublicData = 3;

						await expect(await contractOne.returnPublicData())
							.to.emit(contractOne, 'ReturnEvent')
							.withArgs('publicData', expectedPublicData);
					});
				});
			});
			describe('VSCaller', () => {
				describe('returnPublicData', () => {
					it('should return public data', async () => {
						const expectedPublicData = '30';
						const publicData = await caller.returnPublicData();

						expect(publicData.toString()).to.be.equal(
							expectedPublicData
						);
					});
				});
			});
			describe('VSContractTwo', () => {
				describe('returnInteralData', () => {
					it('should return event of internal data updated internally in function', async () => {
						const expectedInternalData = 3;

						await expect(await contractTwo.returnInternalData())
							.to.emit(contractTwo, 'ReturnEvent')
							.withArgs('internalData', expectedInternalData);
					});
				});
				describe('getResult', () => {
					it('should return state variable', async () => {
						const expectedPublicData = '30';
						const publicData = await contractTwo.getResult();

						expect(publicData.toString()).to.be.equal(
							expectedPublicData
						);
					});
				});
			});
		});
	});
});
