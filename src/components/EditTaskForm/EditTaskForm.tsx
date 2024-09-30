import { ChangeEvent, FC, FormEvent, useState } from "react";
import Task from "../../models/Task";

import style from "./EditTaskForm.module.scss";

interface EditTaskFormProps {
  data: Task;
  updateTask: (newTask: Task) => void;
  handleToggleEdit: () => void;
}

const EditTaskForm: FC<EditTaskFormProps> = ({
  data,
  updateTask,
  handleToggleEdit,
}) => {
  const [editTask, setEditTask] = useState<Task>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditTask({
      ...editTask,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title } = editTask;

    if (title) {
      updateTask(editTask);
      handleToggleEdit();
    }
  };

  return (
    <form className={style.edit__form} onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название задачи"
        onChange={handleChange}
        value={editTask.title}
        className={style.edit__form__input}
      />
      <button className={style.edit__form__button} type="submit">
        Подтвердить
      </button>
    </form>
  );
};

export default EditTaskForm;
