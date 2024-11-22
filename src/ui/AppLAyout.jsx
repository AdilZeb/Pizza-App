import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
const AppLAyout = () => {
  const navigation = useNavigation();

  const isloading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isloading && <Loader />}
      <Header />
      <div className="overflow-auto">
        <main className="max-w-3xl  mx-auto ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLAyout;
