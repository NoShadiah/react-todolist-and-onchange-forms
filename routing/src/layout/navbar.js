import './navbar.css';
import {Outlet, Link} from "react-router-dom";
export const Navbar=()=>{
    return(
        <>
            <div id='nav'>
                <Link to='/' id='item'>Home</Link>
                <Link to='/todolist'id='item'>TodoList</Link>
                <Link to='/Forms'id='item'>Forms</Link>
            </div>
            <Outlet/>
        </>
    )
};