import React, { useState } from "react";
import Accordion from "./components/Accordion";
import SearchComp from "./components/SearchComp";
import Dropdown from "./components/Dropdown";
import Translate from './components/Translate';  

const App = () => {
  // const items = [
  //   {
  //     title: "What is React? ",
  //     content: "React is a front-end javascript framework",
  //   },
  //   {
  //     title: "Why use React?",
  //     content: "React is a favorite JS library among engineers",
  //   },
  //   {
  //     title: "How do you use React?",
  //     content: "You use React by creating components",
  //   },
  // ];

  // const options = [
  //   {
  //     title: "The Color Red",
  //     value: "red",
  //   },
  //   {
  //     title: "The Color Green",
  //     value: "green",
  //   },
  //   {
  //     title: "A Shade of Blue",
  //     value: "blue",
  //   },
  // ];

  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      {/* <Accordion items={items}/> */}
      {/* <SearchComp /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? 
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null
      } */}
      <Translate />
    </div>
  );
};

export default App;
