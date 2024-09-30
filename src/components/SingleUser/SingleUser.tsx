import { FC, useState } from "react";
import User from "../../models/User";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import EditUserForm from "../EditUser/EditUserForm";

import style from "./SingleUser.module.scss";

interface SingleUserProps {
  user: User;
  updateUser: (newUser: User) => void;
  deleteUser: (id: number) => void;
}

const SingleUser: FC<SingleUserProps> = ({ user, updateUser, deleteUser }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = () => {
    deleteUser(user.id);
  };

  return (
    <div className={style.user}>
      <div className={style.user__title}>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
      </div>
      <div className={style.user__controls}>
        <MdModeEdit
          className={style.user__controls__edit}
          onClick={handleToggleEdit}
        />
        <MdDeleteOutline
          className={style.user__controls__delete}
          onClick={handleDelete}
        />
      </div>
      {edit ? (
        <EditUserForm
          data={user}
          updateUser={updateUser}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
    </div>
  );
};

export default SingleUser;
