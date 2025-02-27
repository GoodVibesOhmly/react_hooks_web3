<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/react](./react.md) &gt; [usePack](./react.usepack.md)

## usePack() function

Hook for getting an instance of a `Pack` contract. This contract supports the creation of on-chain luck-based lootboxes.

<b>Signature:</b>

```typescript
declare function usePack(contractAddress?: string): Pack | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  contractAddress | string | <i>(Optional)</i> the address of the Pack contract, found in your thirdweb dashboard |

<b>Returns:</b>

Pack \| undefined

## Example


```javascript
import { usePack } from '@thirdweb-dev/react'

export default function Component() {
  const pack = usePack("<YOUR-CONTRACT-ADDRESS>")

  // Now you can use the pack contract in the rest of the component

  // For example, this function will get all the packs on this contract
  async function getPacks() {
    const packs = await pack.getAll()
    return packs
  }

  ...
}
```

