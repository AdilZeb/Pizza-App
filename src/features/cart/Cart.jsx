import { useSelector } from "react-redux";
import CustomButton from "../../ui/CustomButton";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.userName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-3 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-4 text-xl font-semibold ">Your cart,{username}</h2>
      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item}></CartItem>
        ))}
      </ul>
      <div className="mt-6 space-x-3">
        <CustomButton type={"primary"} to={"/order/new"}>
          Order Pizza
        </CustomButton>
        <CustomButton onclick={() => dispatch(clearCart())} type="secondary">
          Clear cart
        </CustomButton>
      </div>
    </div>
  );
}

export default Cart;
