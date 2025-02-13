import { Web3Provider } from '@ethersproject/providers';
import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react';
import { ChainId } from '@pangolindex/sdk';
import { InjectedConnector } from '@pangolindex/web3-react-injected-connector';
import { TalismanConnector } from '@talismn/web3react-v6-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';
import { BitKeepConnector } from './BitKeepConnector';
import { DefiConnector } from './DefiConnector';
import { HashConnector } from './HashConnector';
import { NearConnector } from './NearConnector';
import { NetworkConnector } from './NetworkConnector';

const NETWORK_URL = 'https://api.avax.network/ext/bc/C/rpc';

// Near Exchnage Contract
export const NEAR_EXCHANGE_CONTRACT_ADDRESS = {
  [ChainId.NEAR_MAINNET]: 'png-exchange-v1.mainnet',
  [ChainId.NEAR_TESTNET]: 'png-exchange-v1.testnet',
};

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '43114');

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`);
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL },
  defaultChainId: NETWORK_CHAIN_ID,
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any);
  return networkLibrary;
}

export const injected = new InjectedConnector({
  supportedChainIds: [43113, 43114, 11111, 16, 19],
});

export const talisman = new TalismanConnector({
  supportedChainIds: [43113, 43114, 11111, 16, 19],
});

export const gnosisSafe = new SafeAppConnector({
  supportedChainIds: [43113, 43114, 11111, 16, 19],
});

export const walletlink = new WalletLinkConnector({
  url: NETWORK_URL,
  supportedChainIds: [43113, 43114, 11111, 16, 19],
  appName: 'Pangolin',
  appLogoUrl: 'https://raw.githubusercontent.com/pangolindex/interface/master/public/images/384x384_App_Icon.png',
});

export const walletconnect = new WalletConnectConnector({
  rpc: {
    43114: NETWORK_URL,
  },
  qrcode: true,
  bridge: 'https://bridge.walletconnect.org',
});

export const xDefi = new DefiConnector({
  supportedChainIds: [1, 43114, 11111, 16, 19],
});

export const bitKeep = new BitKeepConnector({
  supportedChainIds: [43113, 43114, 11111, 16, 19],
});

function getNearMainnetConfig() {
  return {
    networkId: 'mainnet',
    nodeUrl: 'https://rpc.mainnet.near.org',
    walletUrl: 'https://wallet.near.org',
    helperUrl: 'https://helper.mainnet.near.org',
    explorerUrl: 'https://nearblocks.io',
    indexerUrl: 'https://indexer.ref-finance.net',
    chainId: ChainId.NEAR_MAINNET,
    contractId: NEAR_EXCHANGE_CONTRACT_ADDRESS[ChainId.NEAR_MAINNET],
  };
}

// TODO: set configuration dynemically as per env
function getNearConfig(env = 'testnet') {
  switch (env) {
    case 'production':
    case 'mainnet':
      return getNearMainnetConfig();

    case 'testnet':
      return {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://testnet.nearblocks.io',
        chainId: ChainId.NEAR_TESTNET,
        contractId: NEAR_EXCHANGE_CONTRACT_ADDRESS[ChainId.NEAR_TESTNET],
      };
    default:
      return getNearMainnetConfig();
  }
}

export const near = new NearConnector({
  normalizeChainId: false,
  normalizeAccount: false,
  config: getNearConfig('testnet'),
});

export const hashConnect = new HashConnector({
  normalizeChainId: false,
  normalizeAccount: false,
  config: {
    networkId: 'testnet',
    chainId: ChainId.HEDERA_TESTNET,
    contractId: 'contract -id',
  },
});

export { NearConnector, HashConnector };
