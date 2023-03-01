import React from "react";

// This function is to prevent the default behavior of the submit event
function handleSubmit(e){
  e.preventDefault();
  // updated this functional component using the callback prop
  // props.addTask('Say what you want to do');
  alert("Hallo")
}
export function Form(props){
    return (
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>  
    );
}
