import React from "react";
import "./App.css";

const App = () => {
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
