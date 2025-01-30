const TaskForm = () => {
  return (
    <>
    
      <div className="flex flex-col border-2 gap-4 mt-6">
        <h1 className="text-2xl text-indigo-500">New Data form </h1>
        <button className="bg-black text-white rounded">Add new Card</button>
        <div>
          <input
            placeholder="Title"
            type="text"
            onChange={(e) => e.target.value}
          ></input>
          

        </div>
      </div>
    </>
  );
};

export default TaskForm;
