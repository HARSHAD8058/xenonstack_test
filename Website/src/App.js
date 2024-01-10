import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Pages/Login/loginpage';
import Contact from './Pages/Contact/Contact';
import FrontPage from './Pages/FrontPage/FrontPage';
function App() {
 
  return (
    <div className="App">
    
   <Router>
     <Routes>
     <Route  path='/' element={<Login/>} ></Route>
     <Route  path='/Contact' element={<Contact/>} ></Route>
     <Route  path='/Home' element={<FrontPage/>} ></Route>
     </Routes>
     </Router>
 
    </div>
  );
}

export default App;
