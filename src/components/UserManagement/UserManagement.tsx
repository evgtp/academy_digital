import { useState, FC } from "react";
import style from "./UserManagement.module.scss";
import AddUserForm from "../AddUser/AddUserForm";
import User from "../../models/User";
import DisplayUsers from "../DisplayUsers/DisplayUsers";

const UserManagement: FC = () => {
  const [usersList, setUsersList] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsersList([...usersList, newUser]);
  };

  const updateUser = (newUser: User) => {
    setUsersList(
      usersList.map((user) => (user.id === newUser.id ? newUser : user))
    );
  };

  const deleteUser = (id: number) => {
    const newUserList = usersList.filter((user) => user.id !== id);
    setUsersList(newUserList);
  };

  return (
    <div className={style.main}>
      <AddUserForm addUser={addUser} />
      <DisplayUsers
        userList={usersList}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default UserManagement;
