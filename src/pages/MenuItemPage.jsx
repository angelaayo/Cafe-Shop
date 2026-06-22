import { useParams } from "react-router";
import ErrorPage from "./ErrorPage";
import MenuPreview from "../components/MenuPreview";
import data from '../data.json';
export default function MenuItemPage() {
  const { id } = useParams();
  console.log(id);

  const itemExist = data.find((item) => item.title.toLowerCase() == id);
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
