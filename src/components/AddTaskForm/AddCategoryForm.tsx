import { FC, useState, ChangeEvent, FormEvent } from "react";
import Category from "../../models/Category";
import style from "./AddCategoryForm.module.scss";

const initState = {
  category: "",
};

interface AddCategoryFormProps {
  addCategory: (newCategory: Category) => void;
}

const AddCategoryForm: FC<AddCategoryFormProps> = ({ addCategory }) => {
  const [newCategory, setNewCategory] = useState<{ category: string }>(
    initState
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { category } = newCategory;
    if (category) {
      addCategory({ name: category, tasks: [], id: Date.now() });
      setNewCategory(initState);
    }
  };

  return (
    <form className={style.form__category} onSubmit={handleSubmit}>
      <input
        name="category"
        type="text"
        placeholder="Название категории"
        onChange={handleChange}
        value={newCategory.category}
        className={style.form__category__input}
      />
      <button className={style.form__category__button} type="submit">
        + Добавить
      </button>
    </form>
  );
};

export default AddCategoryForm;
