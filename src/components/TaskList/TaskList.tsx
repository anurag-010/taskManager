import React from "react";

const TaskList = () => {
  interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    taskCompleted: boolean;
  }

  const taskList: Task[] = [
    {
      id: 1,
      title: "Task1",
      description: "task1 desc",
      dueDate: "2 July 2023",
      taskCompleted: true,
    },
    {
      id: 2,
      title: "Task2",
      description: "task2 desc",
      dueDate: "3 July 2023",
      taskCompleted: false,
    },
    {
      id: 3,
      title: "Task3",
      description: "task3 desc",
      dueDate: "4 July 2023",
      taskCompleted: true,
    },
    {
      id: 4,
      title: "Task4",
      description: "task4 desc",
      dueDate: "5 July 2023",
      taskCompleted: false,
    },
    {
      id: 5,
      title: "Task5",
      description: "task5 desc",
      dueDate: "6 July 2023",
      taskCompleted: true,
    },
    {
      id: 6,
      title: "Task6",
      description: "task6 desc",
      dueDate: "7 July 2023",
      taskCompleted: false,
    },
    {
      id: 7,
      title: "Task7",
      description: "task7 desc",
      dueDate: "8 July 2023",
      taskCompleted: true,
    },
  ];

  return (
    <section className="p-4 flex flex-row">
      {taskList.map((task) => {
        return (
          <div
            key={task.id}
            className="flex flex-col p-4 m-4 text-center border-2 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all w-64 h-64"
          >
            <h2
              className={`text-2xl  ${
                task.taskCompleted ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </h2>
      
            <p className="text-lg text-gray-700">{task.description}</p>
            <h3 className="text-sm text-gray-500">{task.dueDate}</h3>

            <h3
              className={`text-xl ${
                task.taskCompleted ? "text-green-500" : "text-red-500"
              }`}
            >
              {task.taskCompleted ? "Completed" : "Not Completed"}
            </h3>
            <input className="p-2 mt-2" type="checkbox"></input>
            <button className="border-2">Edit title</button>
          </div>
        );
      })}
    </section>
  );
};

export default TaskList;
