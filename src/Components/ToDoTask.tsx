import { ITask } from "./Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
  completeSubTask(taskNameToDelete: string, subTaskToDelete: string): void;
  subTaskBox: boolean;
}

const TodoTask = ({
  task,
  completeTask,
  completeSubTask,
  subTaskBox,
}: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>Task: {task.taskName}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
      {subTaskBox && (
        <>
          <div className="content">
            <span>Sub Task: {task.subTask}</span>
          </div>
          <button
            onClick={() => {
              completeSubTask(task.taskName, task.subTask);
            }}
          >
            X
          </button>
        </>
      )}
    </div>
  );
};

export default TodoTask;
