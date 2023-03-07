import {Outlet, Link} from "react-router-dom";
export const Navbar=()=>{
    return(
        <>
            
            <div >
                <Link id="link" to='/' >Forms</Link>
                <Link id="link" to='/form1'>Form 1</Link>
                <Link id="link" to='/form2'>Form 2</Link>
                <Link id="link" to='/from3'>Form 3</Link>
            </div>
            <Outlet/>
        <br/><br/>
        </>
    )
};