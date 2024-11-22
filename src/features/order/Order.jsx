// Test ID: IIDSAT
import OrderItem from "./OrderItem";
import { useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 gap-2 sm:px-6 lg:px-8 space-y-8">
      <div className="flex justify-between items-center flex-wrap">
        <h2 className="text-xl font-semibold uppercase">Order #{id} Status</h2>

        <div className="space-x-3 py-2 sm:py-0">
          {priority && (
            <span className="font-semibold bg-red-700 text-red-100 rounded-full px-3 py-1">
              Priority
            </span>
          )}
          <span className="font-semibold text-green-100 bg-green-700 rounded-full px-3 py-1">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2 bg-stone-200 text-stone-500 py-4 px-6 rounded-md ">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.itemId} />
        ))}
      </ul>
      <div className=" space-y-2 bg-stone-200 p-6 rounded-md">
        <p className="font-medium">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && (
          <p className="text-xs font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const id = params.orderId;
  const order = await getOrder(id);
  return order;
}
export default Order;
