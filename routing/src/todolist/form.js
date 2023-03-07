import React, {useState} from "react";


export function Form(props){
  // a function for updating the task name
  const[name, setName] =useState("Complete react app");


  // This function is to prevent the default behavior of the submit event
  function handleSubmit(e){
    e.preventDefault();
    // validation
    // if (name =="")(
    //   alert("add a task please")
    //   )
    //   else(
            // updated this functional component using the callback prop
            props.addTask(name);
            // to reset the input field as empty
            setName("")
    
    // alert("Hallo")
  }
  function handleChange(e){
    setName(e.target.value);
  }
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
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>  
    );
}
