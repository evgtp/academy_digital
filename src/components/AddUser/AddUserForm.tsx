import { FC, useState, ChangeEvent, FormEvent } from "react";
import User from "../../models/User";

import style from "./AddUserForm.module.scss";

interface AddUserFormProps {
  addUser: (newUser: User) => void;
}

const initState = {
  id: "",
  name: "",
  email: "",
};

const AddUserForm: FC<AddUserFormProps> = ({ addUser }) => {
  const [newUser, setNewUser] = useState<{
    id: string;
    name: string;
    email: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email } = newUser;

    if (name && email) {
      addUser({
        name,
        email,
        id: Date.now(),
      });
      setNewUser(initState);
    }
  };

  console.log(newUser);

  return (
    <form className={style.form__user} onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Введите имя"
        onChange={handleChange}
        value={newUser.name}
        className={style.form__user__input}
      />
      <input
        name="email"
        type="text"
        placeholder="Введите email"
        onChange={handleChange}
        value={newUser.email}
        className={style.form__user__input}
      />
      <button className={style.form__user__button} type="submit">
        + Добавить в список пользователей
      </button>
    </form>
  );
};

export default AddUserForm;
