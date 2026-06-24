import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/App.css";
import { useCart } from "./Context/CartContext";
import { Icon } from "@mdi/react";
import { mdiCartOutline, mdiBasketOutline } from "@mdi/js";

export default function App() {
  const { totalCartCount } = useCart();
  return (
    <div className="app">
      <nav>
        <ul className="outerList">
          <li>
            <Link className="brandName" to="/">
              Cafe Nautica
            </Link>
          </li>
          <ul className="innerList">
            <li>
              <Link to="shop">
                <Icon path={mdiBasketOutline} size={1} />
                Shop
              </Link>
            </li>
            <li>
              <Link to="cart">
                <Icon path={mdiCartOutline} size={1} />
                <span>{totalCartCount()}</span>
              </Link>
            </li>
          </ul>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
