import React from "react";
import { useState, useRef } from "react";
import "./App.css";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const App = () => {
  const [person, setPerson] = useState("");
  const [people, setPeople] = useState([]);
  const [data, setData] = useState(false);
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person) {
      setPeople([...people, person]);
      setPerson("");
      setData(true);
    }
  };

  const removeItem = (id) => {
    let newPeople = people.filter((item, index) => index !== id);
    setPeople(newPeople);
  };

  const editItem = (id) => {
    let person = people[id];
    inputRef.current.focus();
    inputRef.current.value = people[id];
  };
  return (
    <>
      <div className="container">
        <h1>Grocery Bud</h1>
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div className="form">
              <input
                ref={inputRef}
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
                    <MdDeleteForever
                      className="btn"
                      onClick={() => removeItem(index)}
                    />
                    <FaRegEdit
                      className="btn"
                      onClick={() => editItem(index)}
                    />
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
