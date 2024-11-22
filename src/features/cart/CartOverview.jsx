import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const pizzaQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  if (!pizzaQuantity) return null;
  return (
    <div className=" flex justify-between px-8 items-center bg-stone-800 text-white p-4 text-base md:text-6 ">
      <p className="font-semibold space-x-3 ">
        <span>{pizzaQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
