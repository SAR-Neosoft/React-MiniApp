import './ShowStudents.css'
import { Button,TextField } from '@material-ui/core';
import { useEffect,useState } from "react";
import { StudentImpl } from "../StudentData/StudentImpl";
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {SearchStudent} from './SearchStudent'
import { useParams } from 'react-router-dom';

function TableBody(){
    let studAr=useSelector((store)=>store.StudReducer);

    let [flag, setFlag] = useState(false);
    //===========================================
    // let studImpl=new StudentImpl();
    let [searchId,setId]=useState();
    // useEffect(()=>{
    //     setArray(studImpl.getAllStudents());
    // },[searchArr]);
    //==============================
    return(
        <>
       
            {
                studAr.map((student)=>{
                    return(
                    <tr key={student.studId}><td>{student.studId}</td>
                    <td>{student.studName}</td>
                    <td>{student.studDepartment}</td>
                    <td>{student.studYear}</td>
                    <td ><Button variant='contained' color='secondary' size='small' >
                    <NavLink style={{'textDecoration':'none'}} to={`/students/delete/${student.studId}`}>DELETE</NavLink>
                    </Button>
                   <Button variant='contained' color='secondary' size='small'  style={{marginLeft:'5px'}} >
                    <NavLink style={{'textDecoration':'none'}} to={`/students/update/${student.studId}`}>UPDATE</NavLink>
                    </Button>
                    </td>
                    </tr>
                    );
                })
            }
        </>
    );
}

function ShowStudents(){
    let { id }=useParams();
    console.log("anda"+id)  
    return(
        <div>
       <SearchIdBar></SearchIdBar>
                     <br/>
            <table  id="customers">
            
            <thead><th>ID</th><th>Name</th><th>Department</th><th>Year</th><th>Actions</th></thead>
                <tbody>
                <TableBody></TableBody>
                <hr/><br/>
                <SearchStudent st={id} ></SearchStudent>
                    
                <br/><br/>
                   
                </tbody>
            </table>
        </div>
    )
}


function SearchIdBar(){

    let [id,setEID]=useState(0);

    let changeId=(e)=>{
        console.log("yeeeeee"+id)
        setEID(e.target.value);
        console.log("bbbbbbbbbbbb"+id)
    }

  

    return(
       
        <div>
            {/* <label>Emter employee Id:</label>
            <input type="number" value={eid} onChange={changeId}></input>
            <li><NavLink  to={`/students/search/${eid}`}>SEARCH</NavLink></li> */}

            <div style={{marginTop:'10%',marginLeft: '5%'}}>
         <TextField  variant='outlined' 
                         type='number' name="search"
                        label='Enter Id'  value={id}  onChange={changeId}
                    ></TextField>
                    <Button size='large' color='primary' variant='contained' style={{padding:'15px',marginLeft:'5px'}}>
                    <NavLink style={{'textDecoration':'none'}} to={`/students/search/${id}`}>Search</NavLink>
                    </Button>

</div>
        </div>



        
    )
    
}

export default ShowStudents;