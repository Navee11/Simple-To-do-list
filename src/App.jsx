import React from "react";
import "./App.css";

const App = () => {
  let sampleObject = {
    key: "example",
    subProperty1: "value1",
    subProperty2: "value2",
    subProperty3: "value3",
  };

  const {
    key: id,
    subProperty1: name,
    subProperty2: value,
    subProperty3: age,
  } = sampleObject;
  console.log(id, name, age, value);

  return (
    <div className="container">
      <h1>Grocery Bud</h1>
      <div>
        <form action="">
          <div className="form">
            <input type="text" id="name" placeholder="Enter the groceries" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
