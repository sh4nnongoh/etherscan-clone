import { FC, ReactNode } from "react";
const Card: FC<{children: ReactNode}> = ({ children }) => (
  // eslint-disable-next-line max-len
  <div className="flex sm:flex-col md:flex-row divide-x m-2 bg-white rounded-lg shadow-md">
    {children}
  </div>
);
export default Card;
