import { FC, useState } from "react";
import AddCategoryForm from "../AddTaskForm/AddCategoryForm";
import DisplayCategories from "../DisplayCategories/DisplayCategories";

import Category from "../../models/Category";

const TaskManager: FC = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>([]);

  const addCategory = (newCategory: Category) => {
    setCategoriesList([...categoriesList, newCategory]);
  };

  const deleteCategory = (id: number) => {
    const newCategoriesList = categoriesList.filter(
      (category) => category.id !== id
    );
    setCategoriesList(newCategoriesList);
  };

  console.log("category list", categoriesList);

  return (
    <div>
      <AddCategoryForm addCategory={addCategory} />
      <DisplayCategories
        categoriesList={categoriesList}
        deleteCategory={deleteCategory}
      />
    </div>
  );
};

export default TaskManager;
