import { Outlet } from "react-router";
import { Link } from "react-router";
import "./styles/App.css";
export default function App() {
  return (
    <div>
      <h1>This is where we have the navigation</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Cafe Nautica</Link>
          </li>
          <li>
            <Link to="shop">Shop Page</Link>
          </li>
          <li>
            <Link to="cart">Cart Page</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
}
