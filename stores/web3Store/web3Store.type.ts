import { ConnectedStarknetWindowObject, StarknetWindowObject, WalletProvider } from 'get-starknet-core';
import { constants } from 'starknet';

interface IWeb3Provider {
	web3Provider?: ConnectedStarknetWindowObject['provider'];
	web3Instance?: ConnectedStarknetWindowObject;
	error?: boolean;
}

interface INetwork {
	chainId: constants.StarknetChainId;
	name: string;
}

interface IWallet {
	id: string;
	srcLogo: string;
	name: string;
}

type TDiscoverableWallet = WalletProvider & { downloadUrl: string };

type TStarknetWallet = {
	wallet?: StarknetWindowObject;
	id: string;
	isInstalled: boolean;
	downloadUrl: string;
};

export type { IWeb3Provider, INetwork, IWallet, TDiscoverableWallet, TStarknetWallet };
