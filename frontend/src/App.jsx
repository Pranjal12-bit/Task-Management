import { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10">
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default App;
