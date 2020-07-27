import React from "react";
import Accordion from "./components/Accordion";
import SearchComp from './components/SearchComp'; 

const App = () => {

  const items = [
      {
        title: 'What is React? ',
        content:'React is a front-end javascript framework'
    }, 
    {
        title: 'Why use React?', 
        content: 'React is a favorite JS library among engineers'
    }, 
    {
        title: 'How do you use React?', 
        content: 'You use React by creating components'
    }
  ]; 

  return (
    <div>
      {/* <Accordion items={items}/> */}
      <SearchComp />
    </div>
  );
};

export default App;
