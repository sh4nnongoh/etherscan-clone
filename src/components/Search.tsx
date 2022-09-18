import {
  ChangeEvent, FC, FormEvent, useState
} from "react";
import { useRouter } from "next/router";
const Search: FC = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.currentTarget.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await router.push(`/block/${searchValue}`);
  };
  return (
    <div className="flex w-80 relative">
      <button
        type="submit"
        aria-label="search"
        onClick={handleSubmit}
        // eslint-disable-next-line max-len
        className="absolute right-0 -mr-12 h-12 px-8 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      />
      <input
        type="text"
        className="w-full bg-white border h-12 py-2 pl-3"
        placeholder="Search by Txn Hash / Block Number"
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};
export default Search;
