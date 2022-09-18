import { FC } from "react";
const Stats: FC<{ title: string; subtitle: string}> = ({ title, subtitle }) => (
  <div className="flex flex-col">
    <span>{title}</span>
    <span>
      {subtitle}
    </span>
  </div>
);
export default Stats;
