import "./products.css";

import Filter from "../../pages/filter/index";
import ProductCard from "../../pages/product_card/index";
import { useSelector } from "react-redux"; // use selector is used to fetch the data from the redux store

const Products = () => {
  const products = useSelector((state) => state.product.products);
  console.log("products", products);

  return (
    <div className="products">
      <div className="breadcrumb">
        <p>
          Home / Clothing /<b>Products</b>
        </p>
      </div>
      <div className="products_container">
        <Filter />
        <div className="products_content">
          {products.map((item, index) => {
            return <ProductCard data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
