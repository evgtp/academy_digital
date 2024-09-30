import { FC } from "react";
import User from "../../models/User";
import style from "./DisplayUsers.module.scss";
import SingleUser from "../SingleUser/SingleUser";

interface DisplayUsersProps {
  userList: User[];
  updateUser: (newUser: User) => void;
  deleteUser: (id: number) => void;
}

const DisplayUsers: FC<DisplayUsersProps> = ({
  userList,
  updateUser,
  deleteUser,
}) => {
  return (
    <div className={style.container}>
      {userList.map((user) => {
        return (
          <SingleUser
            key={user.id}
            user={user}
            updateUser={updateUser}
            deleteUser={deleteUser}
          />
        );
      })}
    </div>
  );
};

export default DisplayUsers;
