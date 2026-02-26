"use client";

import { useAccount, useChainId } from "wagmi";

export function useWallet() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  return {
    address: address || null,
    chainId,
    isConnected
  };
}