import { expect } from 'chai';
import { ethers } from 'hardhat';
import { generateByte32ArrayFromStringArray } from '../utils';

const { Contract } = ethers;

describe('Ballot', () => {
	// TODO: Type ballot: Contract ??
	let ballot: any;
	const proposalNames = ['Proposal 1', 'Proposal 2', 'Proposal 3'];

	before(async () => {
		const proposalNamesBytes32 =
			generateByte32ArrayFromStringArray(proposalNames);
		const Ballot = await ethers.getContractFactory('Ballot');

		ballot = await Ballot.deploy(proposalNamesBytes32);
	});

	describe('when contract deployed with an array of proposal names', () => {
		describe('constructor', () => {
			it('should set initial proposal values', async () => {
				const defaultVoteCount = '0';

				proposalNames.forEach(async (proposalName, index) => {
					const proposal = await ballot.proposals(index);
					const contractProposalName =
						ethers.utils.parseBytes32String(proposal.name);
					const contractProposalVoteCount =
						proposal.voteCount.toString();

					expect(contractProposalName).to.equal(proposalName);
					expect(contractProposalVoteCount).to.equal(
						defaultVoteCount
					);
				});
			});

			it('should set chairperson', async () => {
				const chairperson = await ballot.chairperson();
				const deployFromAddress = await ballot.deployTransaction.from;

				expect(deployFromAddress).to.equal(chairperson);
			});

			it('should set chairperson as initial voter', async () => {
				const chairperson = await ballot.chairperson();
				const voter = await ballot.voters(chairperson);

				expect(voter.weight.toString()).to.equal('1');
				expect(voter.voted).to.equal(false);
				expect(voter.delegate).to.equal(
					'0x0000000000000000000000000000000000000000'
				);
				expect(voter.vote.toString()).to.equal('0');
			});
		});
	});
});
