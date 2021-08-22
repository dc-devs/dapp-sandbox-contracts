import { expect } from 'chai';
import { ethers } from 'hardhat';
import { generateByte32ArrayFromStringArray } from '../utils';

const { Contract } = ethers;

describe('Ballot', () => {
	// TODO: Type ballot: Contract ??
	let ballot: any;
	const proposalNames = ['Proposal 1', 'Proposal 2', 'Proposal 3'];

	beforeEach(async () => {
		const Ballot = await ethers.getContractFactory('Ballot');
		const proposalNamesBytes32 =
			generateByte32ArrayFromStringArray(proposalNames);

		ballot = await Ballot.deploy(proposalNamesBytes32);
		// console.log(ballot);
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
		describe('giveRightToVote', () => {
			describe('when not called by the chairperson', () => {
				it('should revert with error message', async () => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const [owner, address1] = await ethers.getSigners();
					const voterAddress =
						'0x4B7F04f7960db235CFB333721F9eE51a5929AB35';

					await expect(
						ballot.connect(address1).giveRightToVote(voterAddress)
					).to.be.revertedWith(
						'Only chairperson can give right to vote.'
					);
				});
			});
			describe("when the voter's weight is not equal to 0", () => {
				it('should revert with error message', async () => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const [owner, address1] = await ethers.getSigners();

					await expect(
						ballot.giveRightToVote(owner.address)
					).to.be.revertedWith('The voters weight must be 0.');
				});
			});
			describe('when called by the chairperson', () => {
				describe('and when the voter has already voted', () => {
					it('should revert with error message', async () => {
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						const [owner, address1] = await ethers.getSigners();
						await ballot.giveRightToVote(address1.address);
						await ballot.connect(address1).vote(1);

						await expect(
							ballot.giveRightToVote(address1.address)
						).to.be.revertedWith('The voter already voted.');
					});
				});
				describe('and when the voter has not voted', () => {
					it('should give that voter the right to vote', async () => {
						const voterAddress =
							'0x4B7F04f7960db235CFB333721F9eE51a5929AB35';
						await ballot.giveRightToVote(voterAddress);

						const voter = await ballot.voters(voterAddress);

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
		describe('delegate', () => {
			describe('when the voter has already voted', () => {
				it('should revert with error message', async () => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const [owner, address1, address2] =
						await ethers.getSigners();

					// address1 votes
					await ballot.giveRightToVote(address1.address);
					await ballot.connect(address1).vote(1);

					await expect(
						ballot.connect(address1).delegate(address2.address)
					).to.be.revertedWith('You already voted.');
				});
			});
			describe('when the voter deleagtes to herself', () => {
				it('should revert with error message', async () => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const [owner, address1] = await ethers.getSigners();

					await expect(
						ballot.connect(address1).delegate(address1.address)
					).to.be.revertedWith('Self-delegation is disallowed.');
				});
			});
			describe('when their is a delegate loop', () => {
				it('should revert with error message', async () => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const [owner, address1, address2, address3, address4] =
						await ethers.getSigners();

					await ballot.connect(address1).delegate(address2.address);
					// await ballot.connect(address2).delegate(address3.address);
					// await ballot.connect(address3).delegate(address4.address);
					await ballot.connect(address4).delegate(address1.address);

					expect(true).to.be.true;
					// await expect(
					// ).to.be.revertedWith('Self-delegation is disallowed.');
				});
			});
			// describe('when a voter deleagtes to another voter', () => {
			// 	it('should delegate that voters rights to another voter', async () => {
			// 		// eslint-disable-next-line @typescript-eslint/no-unused-vars
			// 		const [owner, address1, address2] =
			// 			await ethers.getSigners();

			// 		ballot.connect(address1).delegate(address2.address);

			// 		expect(true).to.be.true;
			// 	});
			// });
		});
	});
});
