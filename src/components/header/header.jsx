import "./header.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.product.cart);

  return (
    <div className="myntra_header">
      <div className="header_navigation">
        <div className="header_logo" onClick={() => navigate("/")}>
          <img src="myntra_logo.webp" alt="" />
        </div>
        <div className="nav">
          <div
            className="nav_item nav_item_men"
            onClick={() => navigate("/product")}
          >
            <span>MEN</span>
          </div>
          <div
            className="nav_item nav_item_women"
            onClick={() => navigate("/product")}
          >
            <span>WOMEN</span>
          </div>
          <div
            className="nav_item nav_item_kids"
            onClick={() => navigate("/product")}
          >
            <span>KIDS</span>
          </div>
          <div
            className="nav_item nav_item_home"
            onClick={() => navigate("/product")}
          >
            <span>HOME</span>
          </div>
          <div
            className="nav_item nav_item_beauty"
            onClick={() => navigate("/product")}
          >
            <span>BEAUTY</span>
          </div>
          <div
            className="nav_item nav_item_studio"
            onClick={() => navigate("/product")}
          >
            <span>STUDIO</span>
          </div>
        </div>
      </div>

      <div className="header_nav">
        <div className="header_search">
          <input
            type="text"
            placeholder="Search for products,branch and more"
          />
          <i className="search_icon"></i>
        </div>

        <div className="header_items">
          <div className="header_item" onClick={() => navigate("/order")}>
            <HiOutlineShoppingBag />
            <span>Orders</span>
          </div>
          <div className="header_item" onClick={() => navigate("/wishlist")}>
            <CiHeart />
            <span>Wishlist</span>
          </div>
          <div className="header_item" onClick={() => navigate("/bag")}>
            <IoBagOutline />
            <span>Cart {cart.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
