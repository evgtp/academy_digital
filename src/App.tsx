import { FC } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import TaskManager from "./components/TaskManager/TaskManager";

const App: FC = () => {
  return (
    <>
      <Header />
      <TaskManager />
    </>
  );
};

export default App;
