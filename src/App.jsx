import React from "react";
import { useState, useRef } from "react";
import "./App.css";
import List from "./List";
import Modal from "./Modal";
let modalContent = "";

const App = () => {
  const [person, setPerson] = useState("");
  const [people, setPeople] = useState([]);
  const [edit, setEdit] = useState(false);
  const [isModal, setIsModal] = useState(true);
  const [position, setPosition] = useState(null);
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(edit);
    if (!edit) {
      if (person) {
        setPeople([...people, person]);
        setContent("Item Added to the List");
      } else {
        setContent("Please Enter the Value");
      }
    } else {
      people[position] = person;
      setEdit(false);
      setContent("Item Added to the List");
    }
    setIsModal(true);
    setPerson("");
  };
  return (
    <>
      <div className="container">
        {isModal && (
          <Modal
            people={people}
            setContent={setContent}
            content={content}
            setIsModal={setIsModal}
          />
        )}
        <h1>To-Do-List</h1>
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
              <button className="form-btn" type="submit">
                {edit ? "Edit" : "Submit"}
              </button>
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
            setIsModal={setIsModal}
            setContent={setContent}
          />
        )}
      </div>
    </>
  );
};

export default App;
