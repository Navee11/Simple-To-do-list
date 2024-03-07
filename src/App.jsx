import React from "react";
import { useState, useRef } from "react";
import "./App.css";

import List from "./List";
let Modal = "";

const App = () => {
  const [person, setPerson] = useState("");
  const [people, setPeople] = useState([]);
  const [edit, setEdit] = useState(false);
  const [isModal, setIsModal] = useState(true);
  const [position, setPosition] = useState(null);
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(edit);
    if (!edit) {
      if (person) {
        setPeople([...people, person]);
      }
    } else {
      people[position] = person;
      setEdit(false);
    }

    setPerson("");
  };
  return (
    <>
      <div className="container">
        {isModal && <div>{Modal}</div>}
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
                autoComplete="off"
              />
              <button type="submit">{edit ? "Edit" : "Submit"}</button>
            </div>
          </form>
        </div>
        {people.length !== 0 && (
          <List
            people={people}
            inputRef={inputRef}
            setPeople={setPeople}
            setEdit={setEdit}
            setPosition={setPosition}
            setPerson={setPerson}
          />
        )}
      </div>
    </>
  );
};

export default App;
