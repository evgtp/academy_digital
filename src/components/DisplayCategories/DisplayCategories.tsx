import { FC } from "react";
import Category from "../../models/Category";
import SingleCategory from "../SingleCategory/SingleCategory";
import style from "./DisplayCategories.module.scss";

interface DisplayCategoriesProps {
  categoriesList: Category[];
  deleteCategory: (id: number) => void;
}

const DisplayCategories: FC<DisplayCategoriesProps> = ({
  categoriesList,
  deleteCategory,
}) => {
  return (
    <div className={style.container}>
      {categoriesList.map((category) => {
        return (
          <SingleCategory
            key={category.id}
            category={category}
            deleteCategory={deleteCategory}
          />
        );
      })}
    </div>
  );
};

export default DisplayCategories;
