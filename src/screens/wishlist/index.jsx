import Empty from "../../components/empty section";
import HProductCard from "../../components/Hproduct_card";
import "./wishlist.css";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const products = useSelector((state) => state.product.products);

  if (products.filter((item) => item.wishList).length === 0) {
    return <Empty />;
  }

  return (
    <div className="wishlist_container">
      <div className="wishlist_header">
        <span>Wishlist</span>
      </div>

      <div className="wishlist_content">
        <span>Total Items : 1</span>
        {products
          .filter((item) => item.wishList)
          .map((item, index) => {
            return <HProductCard type={"wishlist"} key={index} data={item} />;
          })}
      </div>
    </div>
  );
};

export default Wishlist;
