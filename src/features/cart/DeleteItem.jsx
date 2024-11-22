import { useDispatch } from "react-redux";
import CustomButton from "../../ui/CustomButton";
import { deleteItems } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <CustomButton onclick={() => dispatch(deleteItems(pizzaId))} type="small">
      Delete
    </CustomButton>
  );
};

export default DeleteItem;
