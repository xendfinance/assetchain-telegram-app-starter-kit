import { http, createConfig, injected } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { coinbaseWallet, CoinbaseWalletParameters } from '@wagmi/connectors'
import { INFURA_KEY, PROJECT_ID } from '.';
import { AssetChainMainnet, AssetChainTestnet } from './chains';

const coinBaseOptions: CoinbaseWalletParameters = {
    appName:"Asset Chain Starter Kit"
}

export const coinbaseConfig = coinbaseWallet(coinBaseOptions);

export const wagmiConfig = createConfig({
  chains: [ AssetChainMainnet, AssetChainTestnet ],
  connectors: [ coinbaseConfig, injected() ],
  ssr: true,
  transports: {
    [AssetChainMainnet.id]: http(),
    [AssetChainTestnet.id]: http()
  },
});
