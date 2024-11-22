import { useSelector } from "react-redux";

const Username = () => {
  const Username = useSelector((state) => state.user.userName);
  if (!Username) return null;
  return (
    <div className="text-md font-semibold hidden md:block ">{Username}</div>
  );
};

export default Username;
