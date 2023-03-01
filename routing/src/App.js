
import './App.css';
import {Greet} from './landing_page/landing'
import {Forms} from './forms/forms'
import {List, DATA} from './components/todolist'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Navbar} from './layout/navbar'
import {NoPage} from './layout/nopage'



function App() {
  return (
    <>

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<Greet/>}/>
                <Route path='todolist'element={<List tasks={DATA}/>}/>
                <Route path='forms' element={<Forms/>}/>
                
                <Route path='*' element={<NoPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
    
  );
}

{/* <>
    
<List tasks={DATA}/>
<MyForm/>
 <MyForm2/>
<MyForm3/>
</> */}



export default App;


// return (
//   <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
// );