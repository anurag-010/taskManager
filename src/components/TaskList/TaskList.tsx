import { useState } from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  taskCompleted: boolean;
}

const TaskList = () => {
  const [taskList, setTaskList] = useState<Task[]>([
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
  ]);

  const [editTitleId, setEditTitleId] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDesc, setNewDesc] = useState<string>("");
  const [editDescId, setEditDescId] = useState<number | null>(null);

  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("dueDate");

  // Toggle Task Completion
  const toggleTaskCompletion = (id: number) => {
    setTaskList((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, taskCompleted: !task.taskCompleted } : task
      )
    );
  };

  // Edit Title
  const handleEditTitle = (id: number) => {
    if (newTitle.trim() !== "") {
      setTaskList((prevState) =>
        prevState.map((task) =>
          task.id === id ? { ...task, title: newTitle } : task
        )
      );
      setNewTitle("");
      setEditTitleId(null);
    } else {
      alert("Please enter a valid title");
    }
  };

  // Edit Description
  const handleDescriptionEdit = (id: number) => {
    if (newDesc.trim() !== "") {
      setTaskList((prevState) =>
        prevState.map((task) =>
          task.id === id ? { ...task, description: newDesc } : task
        )
      );
      setNewDesc("");
      setEditDescId(null);
    } else {
      alert("Please enter a valid description");
    }
  };

  // Sorting Logic
  const sortedTasks = [...taskList].sort((a, b) => {
    if (sortBy === "dueDate") {
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  // Searching Logic
  const filteredTasks = sortedTasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      task.description.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  // delete logic
  const deleteTask = (id: number) => {
    setTaskList((prevState) => prevState.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className="p-2 border rounded mb-4 w-full"
      />

      {/* Sorting Options */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 border rounded mb-4 w-full"
      >
        <option value="dueDate">Sort by Due Date</option>
        <option value="title">Sort by Title</option>
      </select>

      {/* Task List */}
      <section className="p-4 flex flex-wrap gap-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col p-4 m-4 text-center border-2 rounded-xl shadow-lg w-64 h-auto"
          >
            {/* Task Title */}
            <h2
              className={`text-2xl ${
                task.taskCompleted ? "line-through text-gray-500" : ""
              }`}
            >
              {task.title}
            </h2>

            {/* Task Description */}
            <p className="text-lg text-gray-700">{task.description}</p>

            {/* Due Date */}
            <h3 className="text-sm text-gray-500">{task.dueDate}</h3>

            {/* Completion Status */}
            <h3
              className={`text-xl ${
                task.taskCompleted ? "text-green-500" : "text-red-500"
              }`}
            >
              {task.taskCompleted ? "Completed" : "Not Completed"}
            </h3>

            {/* Toggle Completion */}
            <input
              className="p-2 mt-2"
              type="checkbox"
              checked={task.taskCompleted}
              onChange={() => toggleTaskCompletion(task.id)}
            />

            {/* Edit Title */}
            {editTitleId === task.id ? (
              <div>
                <input
                  className="p-2 mt-2 border rounded"
                  type="text"
                  placeholder="Edit title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <button
                  className="border-2 cursor-pointer mt-2 p-2 bg-blue-500 text-white"
                  onClick={() => handleEditTitle(task.id)}
                >
                  Save Title
                </button>
              </div>
            ) : (
              <button
                className="border-2 cursor-pointer mt-2 p-2 bg-yellow-500 text-white"
                onClick={() => {
                  setEditTitleId(task.id);
                  setNewTitle(task.title);
                }}
              >
                Edit Title
              </button>
            )}

            {/* Edit Description */}
            {editDescId === task.id ? (
              <div>
                <input
                  className="p-2 mt-2 border rounded"
                  type="text"
                  placeholder="Edit description"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                />
                <button
                  className="border-2 cursor-pointer mt-2 p-2 bg-blue-500 text-white"
                  onClick={() => handleDescriptionEdit(task.id)}
                >
                  Save Description
                </button>
              </div>
            ) : (
              <button
                className="border-2 cursor-pointer mt-2 p-2 bg-gray-500 text-white"
                onClick={() => {
                  setEditDescId(task.id);
                  setNewDesc(task.description);
                }}
              >
                Edit Description
              </button>
            )}
            <button
              className="border-2 cursor-pointer mt-2 p-2 bg-red-500 text-white rounded"
              onClick={() => deleteTask(task.id)}
            >
              Delete Task
            </button>
            
          </div>
        ))}
      </section>
    </div>
  );
};

export default TaskList;
