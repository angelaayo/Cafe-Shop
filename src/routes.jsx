import HomePage from "./pages/HomePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import App from "./App.jsx";
import MenuItemPage from "./pages/MenuItemPage.jsx";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "cart", element: <CartPage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/:id", element: <MenuItemPage /> },
    ],
  },
];

export default routes;
