//Import react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component
const App = () => {
  const buttonText = { text: "click me" };
  const labeltext = "Enter Name: ";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labeltext}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
