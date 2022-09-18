import { useRouter } from "next/router";
import { FC } from "react";
import type { BlockTransactionString } from "web3-eth";
import BlockDetailsTable from "../components/BlockDetailsTable";
import useBlockDetails from "../hooks/useBlockDetails";
const BlockDetails: FC<{block: BlockTransactionString}> = ({ block }) => {
  const router = useRouter();
  const blockNumber = block.number || Number(router.query.blockNumber);
  const blockDetails = useBlockDetails({ blockNumber });
  return (
    <div>
      <h1>Block</h1>
      <div className="inline-flex border-b border-gray-200 dark:border-gray-700">
        <button
          type="button"
          // eslint-disable-next-line max-len
          className="h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
        >
          Overview
        </button>
      </div>
      {blockDetails && <BlockDetailsTable block={blockDetails} />}
    </div>
  );
};
export default BlockDetails;
