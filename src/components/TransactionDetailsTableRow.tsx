import { FC } from "react";
const TransactionDetailsTableRow: FC<{
  row: string[]
}> = ({ row }) => (
  <tr>
    {row.map((item) => <td key={item}>{item}</td>)}
  </tr>
);
export default TransactionDetailsTableRow;
