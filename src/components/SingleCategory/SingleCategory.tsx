import { FC, useState } from "react";
import Category from "../../models/Category";

import { MdOutlineDelete } from "react-icons/md";
import AddTasksForm from "../AddTasksForm/AddTasksForm";
import Task from "../../models/Task";
import SingleTask from "../SingleTask/SingleTask";

import style from "./SingleCategory.module.scss";

interface SingleCategoryProps {
  category: Category;
  deleteCategory: (id: number) => void;
}

const SingleCategory: FC<SingleCategoryProps> = ({
  category,
  deleteCategory,
}) => {
  const [taskList, setTaskList] = useState<Task[]>(category.tasks);

  const addTask = (newTask: Task) => {
    const updatedTasks = [...taskList, newTask];
    setTaskList(updatedTasks);
    category.tasks = updatedTasks;
  };

  const updateTask = (updatedTask: Task) => {
    const updatedTasks = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTaskList(updatedTasks);
    category.tasks = updatedTasks;
  };

  const deleteTask = (id: number) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
    category.tasks = newTaskList;
  };

  const statusTask = (id: number) => {
    const newStatus = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(newStatus);
    category.tasks = newStatus;
  };

  const handleDeleteCategory = () => {
    deleteCategory(category.id);
  };

  console.log("tasklist", taskList);
  return (
    <div className={style.category__container}>
      <div className={style.category__container__wrapper}>
        <h1>{category.name}</h1>
        <div className={style.category__controls}>
          <MdOutlineDelete
            className={style.category__controls__button}
            onClick={handleDeleteCategory}
          />
        </div>
      </div>
      <div className={style.category__tasks}>
        <AddTasksForm addTask={addTask} />
      </div>
      <div className={style.task}>
        {category.tasks.map((task) => {
          return (
            <SingleTask
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
              statusTask={statusTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleCategory;
