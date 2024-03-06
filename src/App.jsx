import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [person, setPerson] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people, person]);
    setPerson("");
  };

  return (
    <div className="container">
      <h1>Grocery Bud</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="form">
            <input
              type="text"
              value={person}
              id="name"
              placeholder="Enter the groceries..."
              onChange={(e) => setPerson(e.target.value)}
              autoComplete="false"
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="list">
        {people.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
