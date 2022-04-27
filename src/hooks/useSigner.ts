import { useAddress } from "./useAddress";
import { useChainId } from "./useChainId";
import { Signer } from "ethers";
import { useEffect, useRef } from "react";
import { useSigner as useWagmiSigner } from "wagmi";

/**
 *
 * @internal
 */
export function useSigner() {
  const { data: signer, refetch: getSigner } = useWagmiSigner();
  const address = useAddress();
  const chainId = useChainId();

  const _getSignerPromise = useRef<ReturnType<typeof getSigner> | null>(null);

  const previousAddress = usePrevious(address);
  const previousChainId = usePrevious(chainId);

  useEffect(() => {
    if (address !== previousAddress || chainId !== previousChainId) {
      if (!_getSignerPromise.current) {
        return;
      } else {
        _getSignerPromise.current = getSigner().finally(() => {
          _getSignerPromise.current = null;
        });
      }
    }
  }, [address, chainId, previousAddress, previousChainId]);

  return Signer.isSigner(signer) ? signer : undefined;
}

function usePrevious<TVal>(value: TVal): TVal | undefined {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef<TVal>();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
