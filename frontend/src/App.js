
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './homejs/Home';
import Course from './course/Course';
import Signup from './components/Signup';
import GellaryPage from './gellary/GellaryPage';
import Qzie from './components/Qzie';

import SignUpAuthetication from './components/SignUpAuthetication';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import AuthenteUserLogin from './components/AuthenteUserLogin';
import Contect from './components/Contect';
import Admin from './components/admin/Admin';
import CourseDesc from './components/CourseDesc';
import ProfileCard from './components/ProfileCard';
import EditProfile from './components/EditProfile';
import Result from './components/Result';

function App() {
  return (
    <div className="App">

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course' element={<Course/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/result' element={<Result/>} />

      <Route path='/gellary' element={<GellaryPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/loginUser' element={<AuthenteUserLogin/>} />
       <Route path='/quiz'   element={<Qzie/>}/>
       <Route path='/admin'   element={<Admin/>}/>
       <Route path='/contect'   element={<Contect/>}/>
       <Route path='/courseDesc'   element={<CourseDesc/>}/>
       <Route path='/profile'   element={<ProfileCard/>}/>
       <Route path='/editprofile'   element={<EditProfile/>}/>


       <Route path='/register'   element={<RegisterForm/>}/>
       <Route path='/signupauth'   element={<SignUpAuthetication/>}/>
      
      </Routes>
    
  
    </div>
  );
}

export default App;
