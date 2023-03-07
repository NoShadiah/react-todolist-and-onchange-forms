//To use the refs for their intended purpose, import use effect since it runs after react renders
import React, {useState, useRef, useEffect} from'react';

// Defining the app and exporting it at the same time
export function Todo(props) {
  // using the isEdit state
  const[isEditing, setEditing]=useState(false);

  // enabling the editing action to work
  const[newName, setNewName] = useState('');

  //Targetting elements
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

// the handle change function to enabl ethe changing of the task name
  function handleChange(e) {
  setNewName(e.target.value);
 }
 function handleSubmit(e) {
  e.preventDefault();
  newName===""?alert("Please add your Task name"):
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
 }
//  To enable the fuctionality of the filter buttons, 
// Create a hook for storing the active filter.
//Render an array of <FilterButton /> elements that allow users to change the active filter
//between all, completed, and incomplete.
 


  // designing the editing template
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
    <div className="form-group">
    <label className="todo-label" htmlFor={props.id}>
    New name for {props.name}
    </label>
    <input 
    id={props.id} 
    className="todo-text" 
    type="text" 
    onChange ={handleChange}
    ref={editFieldRef}/>
    </div>
    <div className="btn-group">
    <button 
    type="button" 
    className="btn todo-cancel" 
    onClick={() => setEditing(false)}
    ref={editButtonRef}>
    Cancel
    <span className="visually-hidden">renaming {props.name}</span>
    </button>
    <button type="submit" className="btn btn__primary todo-edit">
    Save
    <span className="visually-hidden">new name for {props.name}</span>
    </button>
    </div>
    </form>
   );
   //designing the viewing template
   const viewTemplate = (
    <div className="stack-small">
    <div className="c-cb">
    <input
    id={props.id}
    type="checkbox"
    defaultChecked={props.completed}
    onChange={() => props.toggleTaskCompleted(props.id)}
    />
    <label className="todo-label" htmlFor={props.id}>
    {props.name}
    </label>
    </div>
    <div className="btn-group">
    <button id='editbtn' type="button" className="btn" onClick={() => setEditing(true)}>
    Edit <span className="visually-hidden">{props.name}</span>
    </button>
    <button
    type="button"
    className="btn btn__danger"
    onClick={() => props.deleteTask(props.id)}
    >
    Delete <span className="visually-hidden">{props.name}</span>
    </button>
    </div>
    </div>
   );
    //code to be executed after rendering
    useEffect(() => {
      console.log("side effect");
     });
    //  code executed beforeyy
     console.log("main render");

   //Setting a condition for rendering my templates
    return <li className="todo">{isEditing?editingTemplate: viewTemplate}</li>
        }