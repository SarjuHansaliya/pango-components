import { CHAINS, ChainId, Token } from '@pangolindex/sdk';
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export const PNG: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(
    ChainId.FUJI,
    CHAINS[ChainId.FUJI].contracts!.png,
    18,
    CHAINS[ChainId.FUJI].png_symbol,
    'Pangolin',
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    CHAINS[ChainId.AVALANCHE].contracts!.png,
    18,
    CHAINS[ChainId.AVALANCHE].png_symbol,
    'Pangolin',
  ),
  [ChainId.WAGMI]: new Token(
    ChainId.WAGMI,
    CHAINS[ChainId.WAGMI].contracts!.png,
    18,
    CHAINS[ChainId.WAGMI].png_symbol,
    'Wagmi Pangolin',
  ),
  [ChainId.COSTON]: new Token(
    ChainId.COSTON,
    CHAINS[ChainId.COSTON].contracts!.png,
    18,
    CHAINS[ChainId.COSTON].png_symbol,
    'Coston Pangolin',
  ),
  [ChainId.SONGBIRD]: new Token(
    ChainId.SONGBIRD,
    CHAINS[ChainId.SONGBIRD].contracts!.png,
    18,
    CHAINS[ChainId.SONGBIRD].png_symbol,
    'Songbird Pangolin',
  ),
  [ChainId.HEDERA_TESTNET]: new Token(
    ChainId.HEDERA_TESTNET,
    CHAINS[ChainId.HEDERA_TESTNET].contracts!.png,
    18,
    CHAINS[ChainId.HEDERA_TESTNET].png_symbol,
    'Songbird Pangolin',
  ),
  [ChainId.NEAR_MAINNET]: new Token(
    ChainId.NEAR_MAINNET,
    CHAINS[ChainId.NEAR_MAINNET].contracts!.png,
    18,
    CHAINS[ChainId.NEAR_MAINNET].png_symbol,
    'Pangolin Near',
  ),
  [ChainId.NEAR_TESTNET]: new Token(
    ChainId.NEAR_TESTNET,
    CHAINS[ChainId.NEAR_TESTNET].contracts!.png,
    18,
    CHAINS[ChainId.NEAR_TESTNET].png_symbol,
    'Pangolin Near',
  ),
};

export const DAIe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 18, 'DAI.e', 'Dai Stablecoin'),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    18,
    'DAI.e',
    'Dai Stablecoin',
  ),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 18, 'DAI.e', 'Dai Stablecoin'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 18, '', ''),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, ZERO_ADDRESS, 18, '', ''),
};

export const USDCe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'USDC.e', 'USD Coin'),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    6,
    'USDC.e',
    'USD Coin',
  ),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 6, 'USDC.e', 'USD Coin'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 18, '', ''),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, ZERO_ADDRESS, 18, '', ''),
};

export const USDC: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'USDC', 'USD Coin'),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    6,
    'USDC',
    'USD Coin',
  ),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 6, 'USDC', 'USD Coin'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 18, 'USDC', 'USD Coin'),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, 'usdc.fakes.testnet', 18, 'USDC', 'USDC'),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, 'usdc.fakes.testnet', 18, 'USDC', 'USDC'),
};

export const USDTe: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'USDT.e', 'Tether USD'),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    6,
    'USDT.e',
    'Tether USD',
  ),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 6, 'USDT.e', 'Tether USD'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 6, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 6, '', ''),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 6, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, ZERO_ADDRESS, 18, '', ''),
};

export const axlUST: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'axlUST', 'Axelar Wrapped UST'),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0x260Bbf5698121EB85e7a74f2E45E16Ce762EbE11',
    6,
    'axlUST',
    'Axelar Wrapped UST',
  ),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 18, 'axlUST', 'Axelar Wrapped UST'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 18, '', ''),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, ZERO_ADDRESS, 18, '', ''),
};

export const UST: { [chainId in ChainId]: Token } = {
  [ChainId.FUJI]: new Token(ChainId.FUJI, ZERO_ADDRESS, 6, 'UST', 'Wormhole UST'),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0xb599c3590F42f8F995ECfa0f85D2980B76862fc1',
    6,
    'UST',
    'Wormhole UST',
  ),
  [ChainId.WAGMI]: new Token(ChainId.WAGMI, ZERO_ADDRESS, 6, 'UST', 'Wormhole UST'),
  [ChainId.COSTON]: new Token(ChainId.COSTON, ZERO_ADDRESS, 18, '', ''),
  [ChainId.SONGBIRD]: new Token(ChainId.SONGBIRD, ZERO_ADDRESS, 18, '', ''),
  [ChainId.HEDERA_TESTNET]: new Token(ChainId.HEDERA_TESTNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_MAINNET]: new Token(ChainId.NEAR_MAINNET, ZERO_ADDRESS, 18, '', ''),
  [ChainId.NEAR_TESTNET]: new Token(ChainId.NEAR_TESTNET, ZERO_ADDRESS, 18, '', ''),
};
