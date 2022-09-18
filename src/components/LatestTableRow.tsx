import { FC } from "react";
const LatestTableRow: FC<{
  row: string[]
}> = ({ row }) => (
  <tr className="border transition duration-300 ease-in-out hover:bg-gray-100">
    {row.map((item) => (
      <td
        key={item}
        className="px-8 py-4 truncate max-w-xs"
      >
        {item}
      </td>
    ))}
  </tr>
);
export default LatestTableRow;
