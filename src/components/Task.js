import React from "react";

const Task = ({ deleteTask, task }) => {
  const { name, surname, date, time, description, id } = task;

  return (
    <>
      <div className="tarea">
        <p>
          Name: <span> {name} </span>{" "}
        </p>
        <p>
          Surname: <span> {surname}</span>{" "}
        </p>
        <p>
          Date: <span> {date}</span>{" "}
        </p>
        <p>
          Time: <span> {time} </span>
        </p>
        <p>
          Description:<span> {description}</span>{" "}
        </p>

        <button
          className="button eliminar u-full-width"
          onClick={() => deleteTask(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Task;

//onClick={deleteTask(id)}
