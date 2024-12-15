import { http } from "viem";
import {
  opSepolia,
  baseSepolia,
  // mainnet,
  scrollSepolia,
  // sepolia,
  morphHolesky,
  zircuitTestnet,
} from "viem/chains";
import { createConfig } from "wagmi";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [
    // mainnet,
    // sepolia,
    opSepolia,
    baseSepolia,
    scrollSepolia,
    morphHolesky,
    zircuitTestnet,
  ],
  multiInjectedProviderDiscovery: false,
  transports: {
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
    [opSepolia.id]: http(),
    [baseSepolia.id]: http(),
    [scrollSepolia.id]: http(),
    [morphHolesky.id]: http(),
    [zircuitTestnet.id]: http(),
  },
});
