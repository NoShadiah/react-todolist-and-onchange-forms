import {Outlet, Link} from "react-router-dom";
export const Navbar=()=>{
    return(
        <>
            <nav>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/todolist'>TodoList</Link>
                    <Link to='/Forms'>Forms</Link>
                </li>
            </nav>
            <Outlet/>
        </>
    )
};