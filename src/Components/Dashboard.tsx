import { FC, useState, ChangeEvent } from "react";
import "./Dashboard.css";
import TodoTask from "./ToDoTask";
import { ITask } from "./Interfaces";

const Dashboard: FC = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const [task, setTask] = useState<string>("");
  const [subTask, setSubTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setSubTask(event.target.value);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, subTask: subTask, subTaskBox: true };
    setTodoList([...todoList, newTask]);
    setTask("");
    setSubTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  const completeSubTask = (taskName: string, subTaskToDelete: string): void => {
    setTodoList((prevTodoList) => {
      const updatedTodoList = prevTodoList.map((task) => {
        if (task.taskName === taskName && task.subTask === subTaskToDelete) {
          return {
            ...task,
            subTask: "",
            subTaskBox: false,
          };
        }
        return task;
      });
      return updatedTodoList;
    });
  };

  return (
    <div className="App">
      <div>
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task"
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Sub Task"
            name="subTask"
            value={subTask}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-light" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTask
              key={key}
              task={task}
              completeTask={completeTask}
              completeSubTask={completeSubTask}
              subTaskBox={task.subTaskBox}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
