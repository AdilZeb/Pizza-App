import { Link, useNavigate } from "react-router-dom";
const LinkButton = ({ children, to }) => {
  const navigate = useNavigate();
  const ClassName =
    "font-semibold text-sm text-blue-500 hover:underline hover:text-blue-600";
  if (to == "-1")
    return <button className={ClassName} onClick={() => navigate(-1)}></button>;
  return (
    <Link to={to} className={ClassName}>
      {children}
    </Link>
  );
};

export default LinkButton;
