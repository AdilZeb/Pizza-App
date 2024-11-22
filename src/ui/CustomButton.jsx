import { Link } from "react-router-dom";

const CustomButton = ({ children, to, type, onclick }) => {
  const base =
    "inline-block  bg-yellow-400  font-semibold uppercase tracking-wider text-stone-800  transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none  focus:ring focus:ring-yellow-300 focus:ring-offset-2 border rounded-full disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full",
    secondary:
      "inline-block font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-300 hover:text-stone-600 focus:text-stone-600 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 border border-stone-400 px-4 py-2.5 md:px-6 md:py-3.5 text-xs rounded-full hover:bg-stone-300 focus:bg-stone-50 hover:text-stone-900 font-bold focus:text-stone-900 transition-colors duration-300",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onclick)
    return (
      <button
        onClick={onclick}
        // disabled={isSubmitting}
        className={styles[type]}
      >
        {children}
      </button>
    );
  return (
    <button
      // disabled={isSubmitting}
      className={styles[type]}
    >
      {children}
    </button>
  );
};

export default CustomButton;
