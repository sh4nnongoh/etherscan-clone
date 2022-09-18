import { FC } from "react";
const BlockDetailsTableRow: FC<{
  row: string[]
}> = ({ row }) => (
  <tr className="border">
    {row.map((item) => <td key={item} className="px-8 py-4">{item}</td>)}
  </tr>
);
export default BlockDetailsTableRow;
