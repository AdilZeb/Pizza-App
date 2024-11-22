import { formatCurrency } from "../../utils/helpers";
import CustomButton from "../../ui/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { addItems, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  console.log(currentQuantity);
  const isInCart = currentQuantity > 0;
  function handleAddtoCart() {
    console.log("add to cart");
    const catrItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItems(catrItem));
  }
  return (
    <li className="flex  gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-40 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto my-1 flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium text-stone-500">Sold out</p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={id}
                pizzaQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <CustomButton onclick={handleAddtoCart} type="small">
              Add to cart
            </CustomButton>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
