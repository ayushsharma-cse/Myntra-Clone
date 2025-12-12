import "./products.css";

import Filter from "../../pages/filter/index";
import ProductCard from "../../components/product_card/index";
import { useSelector } from "react-redux"; // use selector is used to fetch the data from the redux store
import { useState, useMemo } from "react";

const Products = () => {
  const products = useSelector((state) => state.product.products);

  const [price, setPrice] = useState(""); // pass this into the filter components
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    if (search !== "" || price !== "") {
      // if search exist and price also exist
      let output = products.filter((item) => {
        let name = false;
        let brand = false;

        name = item.name.toLowerCase().includes(search.toLowerCase());
        brand = item.brand.toLowerCase().includes(search.toLowerCase());

        return name || brand; // if either changes it will return
      });

      if (price === "highlow") {
        output = output.sort((a, b) => b.price - a.price);
      } else {
        output = output.sort((a, b) => a.price - b.price);
      }

      return output;
    } else {
      // if empty
      return products;
    }
  }, [search, price, products]);

  return (
    <div className="products">
      <div className="breadcrumb">
        <p>
          Home / Clothing /<b>Products</b>
        </p>
      </div>
      <div className="products_container">
        <Filter
          search={search}
          setSearch={setSearch}
          price={price}
          setPrice={setPrice}
        />

        <div className="products_content">
          {filteredProducts.map((item, index) => {
            return <ProductCard data={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
