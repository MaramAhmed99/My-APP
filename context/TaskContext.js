import { createContext, useState } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {

  const [tasks, setTasks] = useState([

    {
      key: "1",
      title: "Study React Native",
      description: "Complete mobile project"
    },

    {
      key: "2",
      title: "Learn Firebase",
      description: "Connect authentication"
    },

    {
      key: "3",
      title: "Design App UI",
      description: "Improve application design"
    }

  ]);

  function addTask(title, description) {

    const newTask = {

      key: Date.now().toString(),

      title: title,

      description: description

    };

    setTasks((oldTasks) => [...oldTasks, newTask]);

  }

  function deleteTask(key) {

    setTasks((oldTasks) =>
      oldTasks.filter((task) => task.key !== key)
    );

  }

  return (

    <TaskContext.Provider

      value={{

        tasks,

        addTask,

        deleteTask

      }}

    >

      {children}

    </TaskContext.Provider>

  );

}