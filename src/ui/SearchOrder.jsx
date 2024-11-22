import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    navigate(`/order/${search}`);
    setSearch("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="rounded-full text-slate-600 bg-yellow-100 px-8 sm:px-4 py-2 placeholder:text-stone-400 focus:caret-yello-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 w-28 sm:w-64 transition-all duration-300 focus:ring-opacity-50 sm:focus:w-72"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search order..."
      />
    </form>
  );
};

export default SearchOrder;
