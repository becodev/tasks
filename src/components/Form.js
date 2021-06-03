import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const Form = ({ createTasks }) => {
  const [task, setTask] = useState({
    name: "",
    surname: "",
    date: "",
    time: "",
    description: "",
  });

  const updateState = (e) => {
    e.preventDefault();

    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validation
    if (!name || !surname || !date || !time || !description) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Form is empty!",
        showConfirmButton: false,
        timer: 1600,
      });
      return null;
    } else {
      await Swal.fire({
        title: "CONFIRM",
        showDenyButton: true,
        confirmButtonText: `yes`,
        denyButtonText: `Cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sent!",
            showConfirmButton: false,
            timer: 1500,
          });

          //only if send was successful we send the task and clear the form
          task.id = uuidv4();
          createTasks(task);
          setTask({
            name: "",
            surname: "",
            date: "",
            time: "",
            description: "",
          });
        }
      });
    }
  };

  const { name, surname, date, time, description } = task;

  return (
    <>
      <h2>create new task</h2>

      <form onSubmit={handleSubmit}>
        <label>Developer name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="u-full-width"
          onChange={updateState}
          value={name}
        />

        <label>Developer surname</label>
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className="u-full-width"
          onChange={updateState}
          value={surname}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />

        <label>Description</label>
        <textarea
          name="description"
          placeholder="Description"
          className="u-full-width"
          onChange={updateState}
          value={description}
        />

        <button type="submit" className="u-full-width button-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
