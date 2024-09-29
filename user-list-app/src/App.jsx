import logo from './logo.svg';
import './App.css';
import UsersTable from './UsersTable';
import UserForm from './components/UserForm.jsx';
import { Route, Routes } from "react-router-dom"
import Users from './components/Users.jsx';

function App() {
  return (
  
    <div >
     Hello Harsh 
     <UserForm/>
     <Users/>
     <Routes>
      <Route path='/' element={"Home Page"}></Route>
      <Route path ="/users" element={"Users Page"}></Route>
     </Routes> 
   
    </div>
  
  );
}

export default App;
