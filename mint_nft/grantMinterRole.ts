import { getDefaultProvider, Wallet } from 'ethers'; // ethers v5
import { Provider, TransactionResponse } from '@ethersproject/providers'; // ethers v5
import { ERC721Client } from '@imtbl/contracts';

const CONTRACT_ADDRESS = '0x69a4f8e644a492c88ea023c1e7fd908c96243825';
const PRIVATE_KEY = '5368dd7c5b462766ca9bae4156e7a71b5f9ed7857deedcff48f7ce6097afe8a2';
const provider = getDefaultProvider('https://rpc.testnet.immutable.com');

const grantMinterRole = async (
  provider: Provider
): Promise<TransactionResponse> => {
  // Bound contract instance
  const contract = new ERC721Client(CONTRACT_ADDRESS);
  // The wallet of the intended signer of the mint request
  const wallet = new Wallet(PRIVATE_KEY, provider);

  // Give the wallet minter role access
  const populatedTransaction = await contract.populateGrantMinterRole(
    wallet.address, {
  maxPriorityFeePerGas: 100e9,
  maxFeePerGas: 150e9
}
  );
  const result = await wallet.sendTransaction(populatedTransaction);
  return result;
};

grantMinterRole(provider);