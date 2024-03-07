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
  setIsModal,
  setContent,
}) {
  const removeItem = (id) => {
    let newPeople = people.filter((item, index) => index !== id);
    setPeople(newPeople);
    setContent("Item is removed from the List");
    setIsModal(true);
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
            <p className="list-item">{item}</p>
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
      {people.length !== 0 && (
        <button
          id="btn"
          onClick={() => {
            setPeople([]);
            setContent("List is Empty");
            setIsModal(true);
          }}
        >
          Clear Items
        </button>
      )}
    </div>
  );
}

export default List;
