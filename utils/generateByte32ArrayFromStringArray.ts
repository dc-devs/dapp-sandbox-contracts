import { ethers } from 'hardhat';

const generateByte32ArrayFromStringArray = (array: string[]): string[] => {
	return array.map((string) => {
		return ethers.utils.formatBytes32String(string);
	});
};

export default generateByte32ArrayFromStringArray;
