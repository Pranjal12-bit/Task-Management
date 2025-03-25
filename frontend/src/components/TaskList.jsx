import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { TrashIcon, Pencil1Icon, CheckIcon } from "@radix-ui/react-icons";

const TaskList = ({ tasks, fetchTasks }) => {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [newTask, setNewTask] = useState("");

  // ✅ Add a new task
  const addTask = async () => {
    if (newTask.trim() === "") return;
    try {
      await axios.post("http://localhost:5000/tasks", { title: newTask });
      setNewTask("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // ✅ Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // ✅ Update task title
  const updateTask = async (id) => {
    if (editTitle.trim() === "") return;
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, {
        title: editTitle,
      });
      setEditId(null);
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // ✅ Toggle task completion
  const toggleTaskCompletion = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, { completed });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task completion:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <Card className="w-[350px] p-5 bg-white shadow-xl rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-between">
          To-Do List
          <span role="img" aria-label="emoji">
            📋✏️
          </span>
        </h2>

        {/* Add Task Input */}
        <div className="flex mt-4 space-x-2">
          <Input
            placeholder="Add your task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={addTask}
            className="bg-red-500 hover:bg-red-600 text-white"
          >
            ADD
          </Button>
        </div>

        {/* Task List */}
        <CardContent className="mt-4">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() =>
                    toggleTaskCompletion(task._id, !task.completed)
                  }
                />
                {editId === task._id ? (
                  <Input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="p-1 border rounded"
                  />
                ) : (
                  <span
                    className={`text-gray-800 ${
                      task.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.title}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                {editId === task._id ? (
                  <Button
                    onClick={() => updateTask(task._id)}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <CheckIcon />
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      setEditId(task._id);
                      setEditTitle(task.title);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <Pencil1Icon />
                  </Button>
                )}
                <Button
                  onClick={() => deleteTask(task._id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  <TrashIcon />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskList;
