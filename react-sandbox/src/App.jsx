import { useState } from "react";
import "./App.css";
import { Greeting, GreetingsHoC } from "./components/Greeting";
import { LabOne } from "./containers/LabOne";
import { LabTwo } from "./containers/LabTwo";

const App = () => {
  // STATES & VARIABLES
  const [contentName, setContentName] = useState("")
  const contentDictionary = {
    labOne: "Lab 1",
    labTwo: "Lab 2",
  }

  // FUNCTIONS
  const displayHandler = () => {
    switch (contentName) {
      case contentDictionary.labOne:
        return <LabOne />

      case contentDictionary.labTwo:
        return <LabTwo />

      default:
        return <div>nothing to display</div>
    }
  }

  //RETURN
  return (
    <div className="main-app-container">
      <p>This is the welcome page that will display the buttons for each lab</p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={() => setContentName(contentDictionary.labOne)}>Lab 1</button>
        <button onClick={() => setContentName(contentDictionary.labTwo)}>Lab 2</button>
      </div>

      <div style={{ display: "flex", width: "90vw", border: "1px solid red" }}>
        {displayHandler()}
      </div>
      <GreetingsHoC name={"Josephine"}>
        <p>I want to welcome you to the website</p>
      </GreetingsHoC>
    </div>
  );
};
export default App;