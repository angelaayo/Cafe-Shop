import { Outlet } from "react-router";
import { Link } from "react-router";
import "./styles/App.css";
import { useCart } from "./Context/CartContext";
export default function App() {
  const {totalCartCount} = useCart();
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
            <li style={{ textDecoration: "underline" }}>
              <Link to="shop">Shop Page</Link>
            </li>
            <li style={{ textDecoration: "underline" }}>
              <Link to="cart">Cart Page {totalCartCount()}</Link>
            </li>
          </ul>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
