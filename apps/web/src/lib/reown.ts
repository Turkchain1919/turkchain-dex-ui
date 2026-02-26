// src/lib/reown.ts
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { defineChain } from "@reown/appkit/networks";
import { QueryClient } from "@tanstack/react-query";

const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;
if (!projectId) {
  throw new Error("NEXT_PUBLIC_REOWN_PROJECT_ID is not defined");
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3019";

export const turkchain = defineChain({
  id: 1919,
  caipNetworkId: "eip155:1919",
  chainNamespace: "eip155",
  name: "Turkchain",
  nativeCurrency: {
    decimals: 18,
    name: "TC",
    symbol: "TURK"
  },
  rpcUrls: {
    default: { http: ["https://rpc.turkchain1919.com"] }
  },
  blockExplorers: {
    default: { name: "Turkscan", url: "https://turkscan.com" }
  }
});

export const queryClient = new QueryClient();

const metadata = {
  name: "Turkchain DEX",
  description: "Turkchain Swap and Liquidity",
  url: appUrl,
  icons: [`${appUrl}/icon.png`]
};

const networks = [turkchain] as const;
export const wagmiAdapter = new WagmiAdapter({
  networks: [...networks],  projectId,
  ssr: true
});

createAppKit({
  adapters: [wagmiAdapter],
  networks: [...networks],  projectId,
  metadata,
  defaultAccountTypes: { eip155: "eoa" }
});