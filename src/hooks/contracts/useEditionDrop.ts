import { useContract } from "./useContract";
import { EditionDrop } from "@thirdweb-dev/sdk";

/**
 * Hook for getting an instance of an `EditionDrop` contract. This conract is used to interface with ERC1155 compliant NFTs that can be lazily minted.
 * @param contractAddress - the address of the Edition Drop contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useEditionDrop } from '@thirdweb/react-hooks'
 *
 * const App = () => {
 *   const editionDrop = useEditionDrop("<YOUR-CONTRACT-ADDRESS>")
 *
 *   // Now you can use the edition drop contract in the rest of the component
 *
 *   // For example, this function will let the connected wallet claim a new NFT
 *   async function claim(tokenId, quantity) {
 *     await editionDrop.claim(tokenId, quantity)
 *   }
 *
 *   return (
 *     ...
 *   )
 * }
 * ```
 * @public
 */
export function useEditionDrop(
  contractAddress?: string,
): EditionDrop | undefined {
  return useContract("edition-drop", contractAddress);
}
