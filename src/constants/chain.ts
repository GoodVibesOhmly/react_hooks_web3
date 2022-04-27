import { ChainId } from "@thirdweb-dev/sdk";
import { Chain as WagmiChain, chain as wagmiChain } from "wagmi";

export type Chain = WagmiChain;

const chain: Record<string, WagmiChain> = {
  mainnet: wagmiChain.mainnet,
  rinkeby: wagmiChain.rinkeby,
  goerli: wagmiChain.goerli,
  polygon: wagmiChain.polygon,
  polygonMumbai: wagmiChain.polygonMumbai,
  // custom below
  avalanche: {
    id: ChainId.Avalanche,
    name: "Avalanche",
    nativeCurrency: {
      name: "AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    rpcUrls: { default: "https://api.avax.network/ext/bc/C/rpc" },
    blockExplorers: {
      default: {
        name: "SnowTrace",
        url: "https://snowtrace.io/",
      },
    },
    testnet: false,
  } as WagmiChain,
  fantom: {
    id: ChainId.Fantom,
    name: "Fantom Opera",
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",
      decimals: 18,
    },
    rpcUrls: { default: "https://rpc.ftm.tools" },
    blockExplorers: {
      default: {
        name: "FTMScan",
        url: "https://ftmscan.io/",
      },
    },
    testnet: false,
  } as WagmiChain,
} as const;

export const defaultSupportedChains = Object.values(chain);

export type SupportedChainId = typeof defaultSupportedChains[number]["id"];

export type SupportedChain = SupportedChainId | Chain;
