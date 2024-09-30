import Tasks from "./Task";

type Category = {
  id: number;
  name: string;
  tasks: Tasks[];
};

export default Category;
