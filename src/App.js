import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Task from "./components/Task";

const App = () => {
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));
  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  const createTasks = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const title = tasks.length === 0 ? <h1>no tasks</h1> : <h1>tasks</h1>;

  useEffect(() => {
    if (initialTasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
    console.log(tasks);
  }, [tasks, initialTasks]);

  return (
    <>
      <h1>tasks manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createTasks={createTasks} />
          </div>
          <div className="one-half column">
            {title}
            {tasks.map((task) => (
              <Task task={task} deleteTask={deleteTask} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
