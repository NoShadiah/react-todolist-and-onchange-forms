import {Outlet, Link} from "react-router-dom";
export const Navbar=()=>{
    return(
        <>
            
            <div >
                <Link id="link" to='/' >Home</Link>
                <Link id="link" to='/todolist'>TodoList</Link>
                <Link id="link" to='/Forms'>Forms</Link>
            </div>
            <Outlet/>
        <br/><br/>
        </>
    )
};