import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <headre className="flex justify-around items-center uppercase px-4 py-3 bg-yellow-500 border-b-2 border-slate-400 text-white p-4">
      <Link to="/" className="font-semibold text-xl tracking-wider">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </headre>
  );
};

export default Header;
