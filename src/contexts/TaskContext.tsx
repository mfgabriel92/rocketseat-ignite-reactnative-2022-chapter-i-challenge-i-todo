import { createContext, ReactElement, useContext, useState } from "react";
import { Keyboard } from "react-native";

export interface TaskProps {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
}

interface TaskSummary {
  created: number;
  completed: number;
}

interface TaskContextProps {
  tasks: TaskProps[];
  total: TaskSummary;
  addTask: (title: string) => void;
  toggleTaskStatus: (id: number) => void;
  removeTask: (id: number) => void;
}

const TaskContext = createContext({} as TaskContextProps);

function TaskProvider({ children }: { children: ReactElement }) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const total = tasks.reduce(
    (acc, task) => {
      if (task.isCompleted) {
        acc.completed += 1;
      } else {
        acc.created += 1;
      }

      return acc;
    },
    {
      created: 0,
      completed: 0,
    },
  );

  function addTask(title: string) {
    const newTask: TaskProps = {
      id: Number(tasks.length + 1),
      title,
      isCompleted: false,
      createdAt: new Date(),
    };

    Keyboard.dismiss();
    setTasks((prevState) => [...prevState, newTask]);
  }

  function toggleTaskStatus(id: number) {
    const allTasks = [...tasks];
    const i = allTasks.findIndex((t) => t.id === id);
    allTasks[i].isCompleted = !allTasks[i].isCompleted;

    setTasks(allTasks);
  }

  function removeTask(id: number) {
    setTasks((prevState) => {
      return prevState.filter((t) => t.id !== id);
    });
  }

  return (
    <TaskContext.Provider value={{ tasks, total, addTask, toggleTaskStatus, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  return useContext(TaskContext);
}

export { useTasks, TaskProvider };
