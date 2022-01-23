import  ShowStudents from './ShowStudComponent/ShowStudents';
import DeleteStudents from './ShowStudComponent/DeleteStudents';
import { AddStudent } from './ShowStudComponent/AddStudent';
import { UpdateStudent } from './ShowStudComponent/UpdateStudent';

import './App.css';
import NavBar from './NavComponents/NavBar';
import {Footer} from './FooterComponent/Footer';
import { Route,Routes } from 'react-router-dom';

function App() {

  return (

    <div>
    <header>
      <NavBar></NavBar>
    </header>
     <Routes>
      <Route path="/students/showall" element={<ShowStudents></ShowStudents>}></Route>
      <Route path ="/students/delete/:id" element={<DeleteStudents></DeleteStudents>}></Route>
      <Route path ="/students/add" element={<AddStudent></AddStudent>}></Route>
      <Route path ="/students/search/:id" element={<ShowStudents></ShowStudents>}></Route>
      <Route path ="/students/update/:upid" element={<UpdateStudent></UpdateStudent>}></Route>
     </Routes>
     
       <Footer></Footer>
     
    </div>
  );
}

export default App;
