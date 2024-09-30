import "./App.scss";
import { FC } from "react";
import Header from "./components/Header/Header";
import UserManagement from "./components/UserManagement/UserManagement";

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <UserManagement />
    </div>
  );
};

export default App;
