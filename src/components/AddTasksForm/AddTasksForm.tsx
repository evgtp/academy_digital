import { FC, useState, ChangeEvent, FormEvent } from "react";
import Task from "../../models/Task";

import style from "./AddTasksForm.module.scss";

const initState = {
  task: "",
};

interface AddTaskFormProps {
  addTask: (newTask: Task) => void;
}

const AddTasksForm: FC<AddTaskFormProps> = ({ addTask }) => {
  const [newTask, setNewTask] = useState<{ task: string }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { task } = newTask;
    if (task) {
      addTask({ title: task, completed: false, id: Date.now() });
      setNewTask(initState);
    }
  };

  return (
    <form className={style.form__task} onSubmit={handleSubmit}>
      <input
        className={style.form__task__input}
        name="task"
        type="text"
        placeholder="Название задачи"
        onChange={handleChange}
        value={newTask.task}
      />
      <button className={style.form__task__button} type="submit">
        + Добавить
      </button>
    </form>
  );
};

export default AddTasksForm;
