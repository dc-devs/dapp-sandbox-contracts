// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { run, ethers } from 'hardhat';

const main = async () => {
	console.log('Running Scrips - Deploy');
	// Hardhat always runs the compile task when running scripts with its command
	// line interface.
	//
	// If this script is run directly using `node` you may want to call compile
	// manually to make sure everything is compiled
	await run('compile');

	// We get the contract to deploy
	const SimpleStorage = await ethers.getContractFactory('SimpleStorage');
	const storage = await SimpleStorage.deploy();

	await storage.deployed();

	console.log('SimpleStorage deployed to:', storage.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
