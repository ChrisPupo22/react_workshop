import React, { useState } from "react";
import Accordion from "./components/Accordion";
import SearchComp from "./components/SearchComp";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from './components/Route'
import NavBar from './components/NavBar'; 

const App = () => {
  const items = [
    {
      title: "What is React? ",
      content: "React is a front-end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

  const options = [
    {
      label: "The Color Red",
      value: "red",
    },
    {
      label: "The Color Green",
      value: "green",
    },
    {
      label: "A Shade of Blue",
      value: "blue",
    },
  ];

  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  const showComponent = (route, component) => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
    if (window.location.pathname === "/list") {
      return <SearchComp />;
    }
    if (window.location.pathname === "/dropdown") {
      return <Dropdown />;
    }
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  };

  return (
    <div className="ui container">
      <NavBar />
      <Route path='/'>
        <Accordion items={items}/>
      </Route>
      <Route path='/list'>
        <SearchComp />
      </Route>
      <Route path='/dropdown'>
        <Dropdown 
          dropdownLabel='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
