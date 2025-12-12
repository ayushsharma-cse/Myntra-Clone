import Empty from "../../components/empty section";
import HProductCard from "../../components/Hproduct_card";
import "./orders.css";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.product.orders);

  if (orders.length === 0) {
    return <Empty></Empty>;
  } else {
  }

  return (
    <div className="orders_container">
      <div className="orders_header">
        <span>Orders</span>
      </div>
      <div className="orders_content">
        <span>Total Items : {orders.length}</span>
        {orders.map((item, index) => {
          return (
            <HProductCard data={item} key={index} type={"order"}></HProductCard>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
