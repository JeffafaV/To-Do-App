import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
//import TitleCard from "./components/TitleCard.tsx";
import ToDoForm from "./components/ToDoForm.tsx";
//import ToDoList from './components/ToDoList.tsx'

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <TitleCard /> */}
    <ToDoForm />
  </React.StrictMode>
);
