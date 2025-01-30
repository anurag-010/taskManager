// import { useState } from "react";
// const SearchBar = () => {
//       const [searchKeyword, setSearchKeyword] = useState<string>("");
//       const [sortBy, setSortBy] = useState<string>("dueDate");
//       const sortedTasks = [...taskList].sort((a, b) => {
//     if (sortBy === "dueDate") {
//       return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
//     } 
//     if (sortBy === "title") {
//       return a.title.localeCompare(b.title);
//     }
//     return 0;
//   });                                                                            
//       const filteredTasks = sortedTasks.filter(
//         (task:any) =>         
//           task.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
//           task.description.toLowerCase().includes(searchKeyword.toLowerCase())
//       );
//   return (
//     <div>
//        {/* Search Bar */}
//        <input
//         type="text"
//         placeholder="Search tasks..."
//         value={searchKeyword}
//         onChange={(e) => setSearchKeyword(e.target.value)}
//         className="p-2 border rounded mb-4 w-full"
//       />

//       {/* Sorting Options */}
//       <select
//         value={sortBy}
//         onChange={(e) => setSortBy(e.target.value)}
//         className="p-2 border rounded mb-4 w-full"
//       >
//         <option value="dueDate">Sort by Due Date</option>
//         <option value="title">Sort by Title</option>
//       </select>
//     </div>
//   )
// }

// export default SearchBar

