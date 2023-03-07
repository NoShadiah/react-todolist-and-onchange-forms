import {useState} from "react"

export function MyForm3(){
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const[option, setOption]=useState("Blue")
    const ChangeName=(e)=>{
        setName(e.target.value)
       
        console.log(name)

    }
    const ChangeEmail=(e)=>{
        
        setEmail(e.target.value)
         console.log(email)
     }
    function ChangeColor(x){
        setOption(x.target.value)
        
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        name===""?alert("Please add name"): 
        email===""?alert("email is required"): 
        option===""?alert('your option is required'):
        console.log("@"+email, "you selected your bg color as", option )
        
    }
    return(
        <>
        <div id='form1'>
            <h1>We would love to know the color you love most</h1>
        <form onSubmit={handleSubmit} >
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
                onChange={ChangeEmail}/>
            </div>
            <div>
            <label>Select your favourite color </label>
            <select onChange={ChangeColor}>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="maroon">Maroon</option>
                <option value="cream">Cream</option>
                <option value="Orange">Orange</option>
                <option value="pink">Pink</option>
            </select>
                
            </div>
            <div>
                    <button>Submit</button>
            </div>
        </form>
        </div>
        </>
     )
 }