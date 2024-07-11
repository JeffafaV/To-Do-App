import { ChangeEvent, FormEvent, useState, MouseEvent } from "react";
function ToDoForm() {
  const [taskData, setTaskData] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskData(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = tasks.find((value) => value === taskData);
    if (found !== undefined) {
      alert(`The task "${taskData}" already exists.`);
    } else {
      setTasks([...tasks, taskData]);
    }
    setTaskData("");
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(newTasks);
  };

  const editTask = (idx: number) => {
    const editedTasks = [...tasks]; // Making a copy of the tasks array
    const edit = prompt("Edit Task", editedTasks[idx]) || editedTasks[idx];
    const found = editedTasks.find((value) => value === edit);
    if (found !== undefined) {
      alert(`The task "${edit}" already exists.`);
    } else {
      editedTasks[idx] = edit;
      setTasks(editedTasks);
    }
  };

  const clearTasks = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTasks([]);
  };

  return (
    <div className="container px-4 md:mx-auto flex flex-col justify-center align-center gap-4">
      <h1 className="border-b border-black text-center text-6xl font-bold md:text-7xl pb-5">
        To Do List
      </h1>

      <form className="self-center flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          className="rounded border-solid border border-black p-1"
          type="text"
          value={taskData}
          onChange={handleChange}
          placeholder="Enter Task"
        ></input>
        <div className="flex flex-row gap-2 self-center">
          <button
            className="self-center p-2 shadow-md bg-blue-600 rounded text-white"
            type="submit"
          >
            Add
          </button>
          <button
            className="self-center p-2 shadow-md bg-blue-600 rounded text-white"
            onClick={clearTasks}
          >
            Clear
          </button>
        </div>
      </form>
      {/* calling ToDoList with props. props are
      like parameters that are defined in ToDoList */}
      {/* <ToDoList data={someText} /> */}
      {tasks.map((value, idx) => (
        <div
          className="flex flex-row justify-between bg-slate-300 rounded-lg shadow-md"
          key={idx}
        >
          <p className=" p-4 text-xl grow">{value}</p>
          <div className="flex flex-row jusitfy-center m-2 gap-4">
            <button
              className="self-center h-fit p-2 shadow-md bg-blue-600 rounded text-white"
              onClick={() => {
                editTask(idx);
              }}
            >
              Edit
            </button>
            <button
              className=" self-center h-fit p-2 shadow-md bg-blue-600 rounded text-white "
              onClick={() => {
                deleteTask(idx);
              }}
            >
              Delete
            </button>
          </div>
          {/* <button onClick={editTask(idx)}>Edit</button> */}
        </div>
      ))}
    </div>
  );
}

export default ToDoForm;
