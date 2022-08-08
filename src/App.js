import React, { useState } from "react";
import "./app.css";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "estudar",
      completed: false

    },
    {
      id: "2",
      title: "Ler",
      completed: true

    },
    
  ])
  return (
    <>
      <div className="container"> 
        <Tasks tasks ={tasks}/>
      </div>
      
    </>
  )
};

export default App;


