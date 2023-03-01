// importing the todo function from the todo.js file
import {Todo} from "./Todo";
// Using component calls <Todo />to replace the list elements in this file
import {Form} from './form'
import {FilterButton} from './filtterbutton';

export const DATA = [
    { id: "todo-0", name: "Pray", completed: true },
    { id: "todo-1", name: "Clean", completed: false },
    { id: "todo-2", name: "Cook", completed: false }
  ];
export function List(props) {
    // The callback component for fetching data from the form to the app
    function addTask(name){
      alert(name)
    }
    // rETURNING THE TASKS AS A LIST, Rendering the list through iteration and returning the Todo item/component iteself
    const taskList = props.tasks?.map((task) => <Todo id={task.id} name={task.name} completed={task.completed} key = {task.id}/>);
    return (
      <>
      <div className="todoapp stack-large">
        <h1>Todo react app</h1>
        <Form addTask={addTask}/>
          
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
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
          </button>
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
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
    