import { FC, useState, ChangeEvent, FormEvent } from "react";
import User from "../../models/User";
import style from "./EditUserForm.module.scss";

interface EditUserFormProps {
  data: User;
  updateUser: (newUser: User) => void;
  handleToggleEdit: () => void;
}

const EditUserForm: FC<EditUserFormProps> = ({
  data,
  updateUser,
  handleToggleEdit,
}) => {
  const [editUser, setEditUser] = useState<User>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditUser({
      ...editUser,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email } = editUser;

    if (name && email) {
      updateUser(editUser);
      handleToggleEdit();
    }
  };

  console.log(editUser);

  return (
    <form className={style.edit__form} onSubmit={handleSubmit}>
      <div className={style.edit__form__container}>
        <input
          name="name"
          type="text"
          placeholder="Введите имя"
          onChange={handleChange}
          value={editUser.name}
          className={style.edit__form__input}
        />
        <input
          name="email"
          type="text"
          placeholder="Введите email"
          onChange={handleChange}
          value={editUser.email}
          className={style.edit__form__input}
        />
      </div>
      <button className={style.edit__form__button} type="submit">
        Подтвердить
      </button>
    </form>
  );
};

export default EditUserForm;
