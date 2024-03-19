import React from "react";
import { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const createdTasks = ["Task1", "Task2", "Task3", "Task4"];

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <h1>Tasks: {count}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>create task</button>
      <h2>Task Input: {input} </h2>
      <ul>
        {createdTasks.map((t) => {
          {
            return <li key={t}>{t}</li>;
          }
        })}
      </ul>
    </>
  );
};

export default CreateTodo;
