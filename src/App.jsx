import React from "react";
import { useState } from "react";
import "./App.css";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const App = () => {
  const [person, setPerson] = useState("");
  const [people, setPeople] = useState([]);
  const [data, setData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person) {
      setPeople([...people, person]);
      setPerson("");
      setData(true);
    }
  };

  return (
    <>
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
        {data && (
          <div className="info">
            {people.map((item, index) => {
              return (
                <div className="list" key={index}>
                  <span>{item}</span>
                  <div>
                    <MdDeleteForever className="btn" />
                    <FaRegEdit className="btn" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
