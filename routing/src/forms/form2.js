import { useState } from "react";
// Number 1
export function MyForm2(){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [details, setDetails]=useState("");
    const ChangeName=(e)=>{
        setName(e.target.value)
       
        console.log(name)

    }
    const ChangeDetails=(e)=>{
        setDetails(e.target.value)
       
        console.log(details)

}
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('Thank you for your information, we will get back to you shortly, check the console please')
        console.log(details)
    }
    return(
        <>
        <div id='form1'>
            <h1>Provide your data</h1>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Enter your name: </label>
                <input 
                type='text'
                value={name}
                onChange={ChangeName}
                />
                </div>
                <div>
                <label>Enter email: </label>
                <input 
                type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Briefly desribe your work experience:</label>
                    <textarea
                    rows="10"
                    cols="10"
                    value={details}
                    onChange={ChangeDetails}></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>

        </div>
    </>
    )
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm/>);

