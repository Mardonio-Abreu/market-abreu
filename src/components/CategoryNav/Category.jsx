import { useParams } from "react-router-dom";
import items from "../../products/data";
import BasicCard from "../Card/Card";

export const Category = () => {
  let { category } = useParams();

  let ItemList = [];

  switch (category) {
    case "Hats":
      ItemList = items[0].map((element) => <BasicCard props={element} />);
      break;
    case "Hoodies":
      ItemList = items[1].map((element) => <BasicCard props={element} />);
      break;
    case "T-Shirts":
      ItemList = items[2].map((element) => <BasicCard props={element} />);
      break;
    case "Totes":
      ItemList = items[3].map((element) => <BasicCard props={element} />);
      break;
    default:
      console.log("Error!");
  }

  return ItemList;
};

export default Category;
