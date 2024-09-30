import { FC, useState } from "react";
import Task from "../../models/Task";
import { MdOutlineDelete, MdOutlineEdit, MdOutlineCheck } from "react-icons/md";
import EditTaskForm from "../EditTaskForm/EditTaskForm";

import style from "./SingleTask.module.scss";

interface SingleTaskProps {
  task: Task;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: number) => void;
  statusTask: (id: number) => void;
}

const SingleTask: FC<SingleTaskProps> = ({
  task,
  updateTask,
  deleteTask,
  statusTask,
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const toggleTaskCompletion = () => {
    statusTask(task.id);
  };

  return (
    <div className={style.task}>
      <h3>{task.title}</h3>
      {edit ? (
        <EditTaskForm
          data={task}
          updateTask={updateTask}
          handleToggleEdit={handleToggleEdit}
        />
      ) : null}
      <div className={style.task__controls}>
        {!task.completed ? (
          <>
            <button
              className={style.task__controls__button}
              onClick={toggleTaskCompletion}
            >
              Выполнено
            </button>
            <MdOutlineEdit
              className={style.task__controls__edit}
              onClick={handleToggleEdit}
            />
            <MdOutlineDelete
              className={style.task__controls__delete}
              onClick={handleDeleteTask}
            />
          </>
        ) : (
          <MdOutlineCheck className={style.task__controls__check} />
        )}
      </div>
    </div>
  );
};

export default SingleTask;
