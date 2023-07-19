import { Chain } from '../types'

export const skaleTitanTestnet = {
  id: 1_517_929_550,
  name: 'SKALE | Titan Community Hub Testnet',
  network: 'skale-titan-testnet',
  nativeCurrency: { name: 'sFUEL', symbol: 'sFUEL', decimals: 18 },
  rpcUrls: {
    default: {
      http: [
        'https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar',
      ],
    },
    public: {
      http: [
        'https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar',
      ],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'SKALE Explorer',
      url: 'https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com',
    },
    default: {
      name: 'SKALE Explorer',
      url: 'https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com',
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 2085155
    }
  },
  testnet: true,
} as const satisfies Chain
