import { useEffect, useState } from "react";
import type { BlockTransactionString } from "web3-eth";
import { BLOCK_ENDPOINT } from "../constants";
type UseBlockDetailsProp = {
  blockNumber: number
}
const useBlockDetails = ({ blockNumber }: UseBlockDetailsProp): BlockTransactionString | null => {
  const [blockDetails, setBlockDetails] = useState<BlockTransactionString | null>(null);
  useEffect(() => {
    if (!blockNumber) {
      return;
    }
    const query = new URL(BLOCK_ENDPOINT);
    query.searchParams.append("number", `${blockNumber}`);
    fetch(query)
      .then((result) => (result.json()))
      .then((result) => setBlockDetails(result))
      .catch((error) => console.error(error));
  }, [blockNumber]);
  return blockDetails;
};
export default useBlockDetails;
