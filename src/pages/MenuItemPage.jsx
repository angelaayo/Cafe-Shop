import { useParams } from "react-router";
import { useCart } from "../Context/CartContext";
import ErrorPage from "./ErrorPage";
import MenuPreview from "../components/MenuPreview";
export default function MenuItemPage() {
  const { id } = useParams();
  console.log(id);
  const {inventory, loading } = useCart();

  const itemExist = inventory.find((item) => item.title.toLowerCase() == id);
  if(loading){
    return <h1>Loading...</h1>
  }
  if (!itemExist) {
    return <ErrorPage />;
  }
  return (
    <div className="menuPreviewPage">
      <MenuPreview
      menuItem = {itemExist}
      />
    </div>
  );
}
