import { useEffect, useState } from "react";
import type { Transaction } from "web3-eth";
import { TRANSACTION_ENDPOINT } from "../constants";
type UseTransactionDetailsProp = {
  hash: string
}
const useTransactionDetails = ({ hash }: UseTransactionDetailsProp): Transaction | null => {
  const [transactionDetails, setTransactionDetails] = useState<Transaction | null>(null);
  useEffect(() => {
    if (!hash) {
      return;
    }
    const query = new URL(TRANSACTION_ENDPOINT);
    query.searchParams.append("hash", hash);
    fetch(query)
      .then((result) => (result.json()))
      .then((result) => setTransactionDetails(result))
      .catch((error) => console.error(error));
  }, [hash]);
  return transactionDetails;
};
export default useTransactionDetails;
