import { FC } from "react";
const LatestTableRow: FC<{
  row: string[]
}> = ({ row }) => (
  <tr>
    {row.map((item) => <td key={item}>{item}</td>)}
  </tr>
);
export default LatestTableRow;
