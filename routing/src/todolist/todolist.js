// Nanoid is to help giv eunique ids to the created tasks
import {nanoid} from"nanoid";
// importing the todo function from the todo.js file
import {useEffect, useRef, useState} from "react";
import {Todo} from "./Todo";
// Using component calls <Todo />to replace the list elements in this file
import {Form} from './form'
import {FilterButton} from './filtterbutton';

//to focus on the element associated with the ref (via the ref attribute) only when our
//user deletes a task from their list
function usePrevious(value){
  const ref = useRef();
  useEffect(() => {
  ref.current = value;
  });
  return ref.current;
 }
const FILTER_MAP = {
  // All filter shows all tasks, so it returns true for all tasks
  All:() => true,
  //Active filter shows tasks whose completed prop is false.
  Active:(task) => !task.completed,
  //Completed filter shows tasks whose completed prop is true.
  Completed:(task) => task.completed
 };
 //using the Object.keys() method to collect an array of FILTER_NAMES:
 const FILTER_NAMES =Object.keys(FILTER_MAP);


export const DATA = [
    { id: "todo-0", name: "Pray", completed: true },
    { id: "todo-1", name: "Clean", completed: false },
    { id: "todo-2", name: "Cook", completed: false }
  ];
  
export function List(props) {
  const listHeadingRef = useRef(null);
  //Preserving the initial state of my app 
  const[tasks, setTasks] = useState(props.tasks)
  // The callback component for fetching data from the form to the app
    function addTask(name){
      // restructuring the function to be able to add it to the setTask function as a new task
    //  variable to be passed in to setTask
      const newTask={
        // using naniod as a prefix in to set the id
        id:`todo-${nanoid()}`, name, completed:false
      };
      name===""?alert("Please add a task name"):
    //  updating the existing task list
      setTasks([...tasks, newTask])
      alert(name)
    }

    // To toogle tasks as completed  and sync the browser with the app
    function toggleTaskCompleted(id){
      // modifying the function so that it only toggles a task as completed if the checkbox is checked
      // the constant maps over the original tasks array
      const updatedTasks = tasks.map((task)=>{
        // if the task has the same id as the edited task
        if (id === task.id){
          // using the object spread syntax to create a new object and toggle teh completed property of that object before returning it.
          // use object to return a new object whose `completed` has been inverted
          return{...task, completed:!task.completed}
        }
          // if it does not match, i return the original object
        return task;
      });
      // to update the state
      setTasks(updatedTasks)
      // console.log(tasks[0])
    }

    // The deleteTask callback prop
    function deleteTask(id){
      const remainingTasks = tasks.filter((task)=>id!==task.id);
      setTasks(remainingTasks)
    }
    function editTask(id, newName){
      const editedTaskList = tasks.map((task)=>{
        // if this has the same IDas teh edited task
        if(id===task.id){
          return{...task, name:newName}
        }
        return task;
      });
      setTasks(editedTaskList);
    }
    //  To enable the fuctionality of the filter buttons, 
    // Create a hook for storing the active filter.
    //Render an array of <FilterButton /> elements that allow users to change the active filter
    //between all, completed, and incomplete.
    const [filter, setFilter] = useState('All');

    

    // rETURNING THE TASKS AS A LIST, Rendering the list through iteration and returning the Todo item/component iteself
    // 
    const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => <Todo 
                                                id={task.id}
                                                name={task.name} 
                                                completed={task.completed} 
                                                key = {task.id}
                                                toggleTaskCompleted={toggleTaskCompleted}
                                                deleteTask={deleteTask}
                                                editTask={editTask}/>);
    // the FILTER_NAMES array, we can use it to render all three of our filters.
    const filterList = FILTER_NAMES.map((name) => (
      <FilterButton 
      key={name} 
      name={name}
      isPressed={name===filter}
      setFilter={setFilter}/>
     ));
                                                
    //To prevent the use of plural 'tasks' i set a taska noun variable to check the length of the task list
    const tasksNoun =taskList.length !== 1?'tasks':'task'
    
    // counting asks
    const headingText=`${taskList.length} ${tasksNoun} remaining`;
    const prevTaskLength = usePrevious(tasks.length);

    //controling task headings
    useEffect(() => {
      if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
      }
     }, [tasks.length, prevTaskLength]);
    return (
      <>
      <div className="todoapp stack-large">
        <h1>Todolist react app</h1>
        <Form addTask={addTask}/>
          
        <div className="filters btn-group stack-exception">
          
          {filterList}
        </div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading">
          {taskList}
        </ul>
      </div>
      
             
      </>
    );
  }
    
  // export default addTask
  {/* <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button> */}