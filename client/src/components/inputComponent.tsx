import { Button, Input } from "@material-tailwind/react";
import { SetStateAction, useState } from "react";
import { useTodos } from "../context/useTodos";

export const InputComponent = () => {
  const [taskInputValue, setTaskInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const { handleAddItem } = useTodos()

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setTaskInputValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (taskInputValue === "") {
      setError(true);
      setErrorMessage("Please write something!");

      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    } else {
      handleAddItem({ id: Math.floor(Math.random()), title: taskInputValue, isSelected: false })
    }
    setTaskInputValue("");
  };

  return <>
    <div className="text-red-400 text-xs ">
      <div
        style={{
          display: error ? "" : "none"
        }}
      >
        <span>{errorMessage} </span>
      </div>
    </div>
    <form className="input_form relative flex mb-5 w-full max-w-xs" onSubmit={handleSubmit}>
      <Input
        className="text-white"
        variant="static"
        type="text"
        placeholder="Add a task ..."
        value={taskInputValue}
        onChange={handleChange}
      />
      <Button className="text-white" variant="text" type="submit">Add</Button>
    </form>
  </>;
}
