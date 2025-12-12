import "./product_card.css";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../Redux/Slice/product_slice";

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.product.cart);

  const handleAddCart = () => {
    if (cart.length === 0) {
      dispatch(setCart([data]));
    }

    let isexist = cart.filter((item) => item.id === data.id);

    if (isexist.length === 0) {
      //means ki that product does not exist
      dispatch(setCart([...cart, data]));
    } else {
      // that product exist
      let values = cart.map((item) => {
        if (item.id === data.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      dispatch(setCart(values));
    }
  };

  return (
    <div className="product_card">
      <div className="product_card_img">
        <img src={data.imgURIs[0]} alt={data.imgURIs[0]} />
        <div className="product_card_ratings">
          <p>
            <span>{data.rating}</span> <i></i> <span>| {data.reviews}</span>
          </p>
        </div>

        {/* product_fill_heart ; product_empty_heart */}
        <div
          className={
            data.wishList ? "product_fill_heart" : "product_empty_heart"
          }
        ></div>
      </div>

      <div className="product_card_details">
        <span className="product_card_brand">{data.brand}</span>
        <span className="product_name">{data.name}</span>
        <p className="product_prices">
          Rs. {data.price} <del>Rs. {data.MRP}</del>{" "}
          <span>{`(${data.discount}% OFF)`}</span>
        </p>
      </div>

      <div className="product_card_btn">
        <button onClick={handleAddCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
