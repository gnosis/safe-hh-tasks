import dotenv from "dotenv";
import { ethers6 } from "ethers6-proxied";

dotenv.config();
const { NETWORK, NODE_URL, INFURA_KEY, MNEMONIC, PK, SOLIDITY_VERSION, SOLIDITY_SETTINGS } = process.env;

export const providerv6 = new ethers6.JsonRpcProvider(NODE_URL);
export const signerv6 = new ethers6.Wallet(PK as string, providerv6);


