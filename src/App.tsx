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


import  { useState } from "react";

const App = () => {
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  
  const handleAccordionClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  interface AccordionData {
    head: string;
    headData: string;
  }

  const accordionData: AccordionData[] = [
    { head: "Accordion Title 1", headData: "This is the content of accordion 1." },
    { head: "Accordion Title 2", headData: "This is the content of accordion 2." },
    { head: "Accordion Title 3", headData: "This is the content of accordion 3." },
    { head: "Accordion Title 4", headData: "This is the content of accordion 4." }
  ];

  return (
    <div>
      {accordionData.map((ele, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="flex flex-col items-center text-center mt-16">
           
            <h1
              onClick={() => handleAccordionClick(index)}
              className="bg-gray-600 w-[50%] text-white text-2xl cursor-pointer"
            >
              {ele.head}
            </h1>

          
            {isOpen && <h2 className="bg-amber-500 w-[50%]">{ele.headData}</h2>}
          </div>
        );
      })}
    </div>
  );
};

export default App;




