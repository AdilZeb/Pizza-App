import { useDispatch } from "react-redux";
import CustomButton from "../../ui/CustomButton";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, pizzaQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center md:gap-3 gap-1">
      <CustomButton
        onclick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type="round"
      >
        -
      </CustomButton>
      {pizzaQuantity}
      <CustomButton
        onclick={() => dispatch(increaseItemQuantity(pizzaId))}
        type="round"
      >
        +
      </CustomButton>
    </div>
  );
};

export default UpdateItemQuantity;
