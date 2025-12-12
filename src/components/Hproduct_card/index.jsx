import "./hproduct_card.css";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../Redux/Slice/product_slice";

const HProductCard = ({ data, type }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.cart);

  const handleRemoveItem = () => {
    dispatch(setCart(cart.filter((item) => item.id !== data.id)));
  };

  const handleQty = (event) => {
    let values = cart.map((item) => {
      if (item.id === data.id) {
        return { ...item, qty: event.target.value };
      } else {
        return item;
      }
    });
    dispatch(setCart(values));
  };

  return (
    <div className="h_product_container">
      <div className="h_product_image">
        <img src={data.imgURIs[0]} alt={data.imgURIs[0]} />
      </div>
      <div className="h_product_details">
        <div className="h_product_info">
          <span>{data.brand}</span>
          <p>{data.name}</p>
        </div>
        <div className="h_product_qty">
          {type === "cart" && ( // when the type is cart then only the dropdwon menu else not
            <select value={data.qty} onChange={handleQty}>
              <option value={1}>Qty.1</option>
              <option value={2}>Qty.2</option>
              <option value={3}>Qty.3</option>
              <option value={4}>Qty.4</option>
              <option value={5}>Qty.5</option>
              <option value={6}>Qty.6</option>
              <option value={7}>Qty.7</option>
              <option value={8}>Qty.8</option>
              <option value={9}>Qty.9</option>
              <option value={10}>Qty.10</option>
            </select>
          )}

          {type === "order" && <span>{`Qty.${data.qty}`}</span>}

          {type === "wishlist" && <button>Add to cart</button>}
        </div>
        <div className="h_product_price">
          <p>
            Rs. {data.price} <del>Rs.{data.MRP}</del>{" "}
            <p>{`(${data.discount}%) OFF`}</p>
          </p>
        </div>
      </div>
      {type !== "order" && (
        <div className="h_product_close" onClick={handleRemoveItem}></div>
      )}
    </div>
  );
};

export default HProductCard;
