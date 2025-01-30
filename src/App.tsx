// import Navbar from "./components/Navbar/Navbar";
// import TaskList from "./components/TaskList/TaskList";

// // import TaskForm from './components/TaskForm/TaskForm'
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <TaskList />
//       {/* <TaskForm/> */}
//     </div>
//   );
// };

// export default App;

// import  { useState } from "react";

// const App = () => {

//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const handleAccordionClick = (index: number) => {
//     setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   interface AccordionData {
//     head: string;
//     headData: string;
//   }

//   const accordionData: AccordionData[] = [
//     { head: "Accordion Title 1", headData: "This is the content of accordion 1." },
//     { head: "Accordion Title 2", headData: "This is the content of accordion 2." },
//     { head: "Accordion Title 3", headData: "This is the content of accordion 3." },
//     { head: "Accordion Title 4", headData: "This is the content of accordion 4." }
//   ];

//   return (
//     <div>
//       {accordionData.map((ele, index) => {
//         const isOpen = openIndex === index;

//         return (
//           <div key={index} className="flex flex-col items-center text-center mt-16">

//             <h1
//               onClick={() => handleAccordionClick(index)}
//               className="bg-gray-600 w-[50%] text-white text-2xl cursor-pointer"
//             >
//               {ele.head}
//             </h1>

//             {isOpen && <h2 className="bg-amber-500 w-[50%]">{ele.headData}</h2>}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

//Task 1 take a string and return in reverse order
// const App = () => {
//   let str = "abcdefghijk";
//   let myArr = str.split("");
//   let newArr = myArr.reverse();

//   return (
//     <div>
//       <h1 className="flex text-3xl text-center justify-center">
//         {str} = Normal string
//       </h1>

//       <div className="flex flex-col items-center">
//         <h2 className="text-3xl">Original Array:</h2>
//         {myArr.map((alpha, index) => (
//           <h1 key={index} className="text-3xl">{alpha}</h1>
//         ))}

//         <h2 className="text-3xl mt-4">Reversed Array:</h2>
//         {newArr.map((el, indx) => (
//           <h1 key={indx} className="text-3xl">{el}</h1>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

//task 2 create a func that accepts a sentence and then count the number of vowels in it a ei ou

// import React, { useState } from 'react';

// const App = () => {
//   let sentence = "Hi this is a sentence with both word and vowels in it now im just passing it to a func to count number of vowels";
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   const vowelCount = (sentence: string) => {
//     const newArr = sentence.split("");
//     newArr.forEach((char) => {
//       if (vowels.includes(char.toLowerCase())) {
//         count += 1;
//       }
//     });
//   };

//   // Run the function to count vowels
//   vowelCount(sentence);

//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");


  const submitHandler: any = (e:any) => {
  e.preventDefault()
  console.log("form submit hogya penchooooo");
  
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form     onSubmit={(e) => {
            submitHandler(e);
          }} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Sign Up
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="name"
           
            
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
        
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;






// Conditional Rendering Based on User Authentication: You have a React application with a login page. Based on whether the user is logged in or not, you need to display different content:

// If the user is logged in (isLoggedIn = true), display a welcome message: "Welcome, [User]".
// If the user is not logged in (isLoggedIn = false), display a login button with the text "Login".
// Write the JSX using a conditional operator to achieve this behavior. Use isLoggedIn as a state or prop.let 


// const userLoggedIn = true;
// const user = "Pratham";

// return (
//   <div>
//     {userLoggedIn ? `Welcome, ${user}` : "Login"}
//   </div>
// );

// "loading" → Show "Loading..."
// "success" → Show "Data loaded successfully!"
// "error" → Show "Error loading data."


// const status = "loading"; // Can be "loading", "success", or "error"

// return (
//   <div>
//     {status === "loading"
//       ? "Loading..."
//       : status === "success"
//       ? "Data loaded successfully!"
//       : "Error loading data."}
//   </div>
// );


// Create a React functional component called RoleGreeting that takes a role prop ("admin", "user", or "guest").

// If role === "admin", show "Welcome, Admin!"
// If role === "user", show "Welcome, User!"
// Otherwise, show "Welcome, Guest!"
// Requirements:

// Use TypeScript to define prop types.
// Use a ternary operator or another suitable conditional operator for rendering.


 