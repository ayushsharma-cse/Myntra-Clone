import "./cart.css";
import HProductCard from "../../components/Hproduct_card";
import { useSelector } from "react-redux";
import Empty from "../../components/empty section";

const Carty = () => {
  const cart = useSelector((state) => state.product.cart);

  if (cart.length === 0) {
    return <Empty />;
  }

  return (
    <div className="cart_container">
      <div className="cart_item_section">
        <span>Check delivery time & service</span>
        <button>ENTER PIN CODE</button>
      </div>
      <div className="cart_items">
        <span>{cart.length}ITEMS SELECTED</span>
        <div className="cart_item_container">
          {cart.map((item, index) => (
            <HProductCard data={item} key={index} type="cart" />
          ))}
        </div>
      </div>

      <div className="cart_bill_section">
        <div className="cart_bill_coupon">
          <span>Apply Coupan</span>
          <button>APPLY</button>
        </div>

        <div className="cart_bill">
          <span>PRICE DETAILS ({cart.length} item)</span>
          <table>
            <tr>
              <td>Total MRP</td>
              <td>Rs.0</td>
            </tr>
            <tr>
              <td>Platform Fee</td>
              <td>Rs.0</td>
            </tr>
            <tr>
              <td>Shipping Fee</td>
              <td>Rs.0</td>
            </tr>
            <tr className="total_amount">
              <td>Total Amount</td>
              <td>Rs.0</td>
            </tr>
          </table>
          <button>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Carty;
