import { useRouter } from "next/router";
import { FC } from "react";
import type { BlockTransactionString } from "web3-eth";
import BlockDetailsTable from "../components/BlockDetailsTable";
import Card from "../components/Card";
import useBlockDetails from "../hooks/useBlockDetails";
const BlockDetails: FC<{block: BlockTransactionString | null}> = ({ block }) => {
  const router = useRouter();
  const blockNumber = block?.number || Number(router.query.blockNumber);
  const blockDetails = useBlockDetails({ blockNumber });
  return (
    <div className="m-10">
      <h1>Block</h1>
      <div className="inline-flex border-b border-gray-200">
        <button
          type="button"
          // eslint-disable-next-line max-len
          className="h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base  whitespace-nowrap focus:outline-none"
        >
          Overview
        </button>
      </div>
      {blockDetails && (
      <Card>
        <BlockDetailsTable block={blockDetails} />
      </Card>
      )}
    </div>
  );
};
export default BlockDetails;
