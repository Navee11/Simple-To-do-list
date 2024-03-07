import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function List({
  people,
  setPeople,
  inputRef,
  setEdit,
  setPosition,
  setPerson,
}) {
  const removeItem = (id) => {
    let newPeople = people.filter((item, index) => index !== id);
    setPeople(newPeople);
  };

  const editItem = (id, value) => {
    inputRef.current.focus();
    setPerson(value);
    setEdit(true);
    setPosition(id);
  };
  return (
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
                onClick={() => editItem(index, item)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
