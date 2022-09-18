import { useRouter } from "next/router";
import { FC } from "react";
import type { Transaction } from "web3-eth";
import TransactionDetailsTable from "../components/TransactionDetailsTable";
import useTransactionDetails from "../hooks/useTransactionDetails";
const TransactionDetails: FC<{transaction: Transaction | null}> = ({ transaction }) => {
  const router = useRouter();
  const hash = transaction?.hash || router.query.transactionHash as string;
  const transactionDetails = useTransactionDetails({ hash });
  return (
    <div className="m-10">
      <h1>Transaction Details</h1>
      <div className="inline-flex border-b border-gray-200">
        <button
          type="button"
          // eslint-disable-next-line max-len
          className="h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base whitespace-nowrap focus:outline-none"
        >
          Overview
        </button>
      </div>
      {transactionDetails && <TransactionDetailsTable transaction={transactionDetails} />}
    </div>
  );
};
export default TransactionDetails;
