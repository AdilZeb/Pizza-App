import { useState } from "react";
import CustomButton from "../../ui/CustomButton";
import { useDispatch } from "react-redux";

import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm md:text-base my-2 ">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-72 input"
      />

      {username !== "" && (
        <div className="mt-8">
          <CustomButton type="primary">Search Order</CustomButton>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
