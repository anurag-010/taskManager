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

// import React, { useState } from "react";

// const App = () => {
//   const [name, setName] = useState<String>("");
//   const [email, setEmail] = useState<String>("");
//   const [password, setPassword] = useState<String>("");


//   const submitHandler: any = (e:any) => {
//   e.preventDefault()
//   console.log("form submit hogya penchooooo");
  
//   };
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form     onSubmit={(e) => {
//             submitHandler(e);
//           }} className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
//           Sign Up
//         </h2>

//         {/* Name Field */}
//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium text-gray-600"
//             htmlFor="name"
           
            
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your name"
//           />
//         </div>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium text-gray-600"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Password Field */}
//         <div className="mb-6">
//           <label
//             className="block text-sm font-medium text-gray-600"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter your password"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
        
//           className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;






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




// Create a React functional component called ActionButton that takes two props:

// isLoggedIn (boolean) → Determines if the user is logged in.
// role (string, can be "admin", "user", or "guest").
// Rendering Conditions:
// If isLoggedIn is false, show a button with the text "Login"
// If isLoggedIn is true:
// If role === "admin", show "Dashboard"
// If role === "user", show "Profile"
// If role === "guest", show "Explore"
// Requirements:

// Use TypeScript for type safety.
// Use a ternary operator or another suitable conditional operator to render the button text.


// interface RoleProps {
//   role: "admin" | "user" | "guest";
// }

// const RoleGreeting: React.FC<RoleProps> = ({ role }) => {
//   return (
//     <div>

//       {role === "admin"
//         ? "Welcome, Admin!"
//         : role === "user"
//         ? "Welcome, User!"
//         : "Welcome, Guest!"}
//     </div>
//   );
// };

// // Example usage:
// <RoleGreeting role="admin" />


// interface ActionProps {
//  role : "admin" | "user" | "guest",
//  isLoggedIn: boolean

// } 
// const  ActionButton : React.FC<ActionProps> = ({role,isLoggedIn})=>{
//   return(
//     <div>
//       {!isLoggedIn return <button>Login</button>}
//       {role === "admin"
//         ? "Dashboard"
//         : role === "user"
//         ? "Profile"
//         : "Explore"}

//     </div>
//   )
// }

// interface theme {
//   isDarkMode:boolean
// }

// const ThemeToggle : React.FC<theme>= ({isDarkMode})=>{
//   return(
//     <>
//     {isDarkMode?return <button>Switch to light mode</button> ; <button>Switch to light mode</button>}
//     </>
//   )
// }


// interface product {
//   price :number,
//   isOnSale : boolean
// }

// const ProductPrice = React.FC<product>=({price,isOnSale})=>{
//   return(
//     <>
//     {isOnSale?20%ofprice : price}
//     </>
//   )
// }


// Here are some problems that involve nested conditionals (ternary operators or if statements) in React and TypeScript. These will help you practice handling complex conditional rendering logic.

// Problem 1: Multi-Step Form Progress
// Create a React functional component called FormProgress that takes the following props:

// currentStep (number) → The current step of the form (1 to 4).
// isComplete (boolean) → Whether the form is completely filled out.
// Rendering Conditions:
// If isComplete is true, show "Form Completed".
// If currentStep === 1, show "Step 1: Personal Information".
// If currentStep === 2, show "Step 2: Contact Details".
// If currentStep === 3, show "Step 3: Address Information".
// If currentStep === 4, show "Step 4: Review & Submit".
// If the currentStep is out of range (not 1, 2, 3, or 4), show "Invalid Step".



// interface Multi {
//   currentStep : number;
//   isComplete : boolean;

// }
// const MultiStepForm = React.FC<Multi> =({currentStep,isComplete}=>{
//   return(
//     <>
//     {isComeplete===true?"Form Completed": currentStep===1 :"Personal Information"}
//     </>
//   )
// }

// Create a React functional component called UserDashboard that takes the following props:

// role (string) → The user’s role ("admin", "user", or "guest").
// isSubscribed (boolean) → Whether the user has an active subscription.
// Rendering Conditions:
// ✅ If role === "admin", show "Admin Dashboard".
// ✅ If role === "user":

// If isSubscribed === true, show "Welcome back, Subscriber!".
// If isSubscribed === false, show "Please subscribe to access content.".
// ✅ If role === "guest", show "Please sign in to access content.".

// interface User {
//   role: "admin" | "user" | "guest";
//   isSubscribed: boolean;
// }

// const UserDashboard: React.FC<User> = ({ role, isSubscribed }) => { 
//   return <div>{/* Add rendering logic here */}</div>;
// };


// 🔹 useState Problems
// 1️⃣ Counter with Step Size
// Problem:
// Create a counter component where:

// The user can increase or decrease the count.
// The step size can be changed dynamically using an input field.
// Questions:

// How does useState trigger re-renders?
// What happens if you update state inside a loop without using the previous state?
// How can you ensure the counter does not go below zero?
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [step, setStep] = useState<number>(1); // Step size

  // Increase counter
  const handleIncrease = () => {
    setCount(prevCount => prevCount + step);
  };

  // Decrease counter
  const handleDecrease = () => {
    setCount(prevCount => prevCount - step);
  };

  return (
    <div className="p-4 flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>

      {/* Step Size Input */}
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        className="border p-2 w-20 text-center"
      />

      {/* Buttons */}
      <div className="space-x-4">
        <button className="bg-gray-300 p-2 rounded" onClick={handleIncrease}>
          Increase
        </button>
        <button className="bg-amber-100 p-2 rounded" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
