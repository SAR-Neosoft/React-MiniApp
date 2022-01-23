import './AddStudent.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Button, Checkbox, TextField, makeStyles, Typography } from '@material-ui/core';
import { Navigate } from "react-router-dom";
import { Student } from "../StudentData/Student";
import { addStudent } from "../Actions/StudAction";
const useStyles =makeStyles({
    root:{
      marginBottom:'10px',
      width:'50%'
    
    }
  })

export function AddStudent() {

    let [flag, setFlag] = useState(false);

    const [student, setStudent] = useState(new Student());
    const setDetails = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    let dispatch = useDispatch();
    const test = (e) => {
        e.preventDefault();
        console.log(student);
        dispatch(addStudent(student));
        setFlag(true);


    }
    const classes=useStyles();
    return (
        
        <div className="st">
        
            {flag === false ?
                <form onSubmit={test}>
                    {/* <label>Enter Id:</label>
                <input type="number" name="studId" value={student.studId} onChange={setDetails}></input>
                <br/>
                

                <label>Enter Your name:</label>
                <input type="text"  name="studName"  value={student.studName} onChange={setDetails}></input>
                <br/>
                <label>Enter Department:</label>
                <input type="text"  name="studDepartment"  value={student.studDepartment} onChange={setDetails}></input>
                <br/>
                <label>Enter Year:</label>
                <input type="text"   name="studYear" value={student.studYear} onChange={setDetails}></input>
                <br/>
               <input type="submit" value="ADD STUDENTS"></input> */}
               

                    <TextField variant='filled'  className={classes.root}
                        color='secondary' type='number' name="studId"
                        label='Enter Id'
                        value={student.studId} onChange={setDetails}
                    ></TextField>
                     <br/>
                     <TextField variant='filled' className={classes.root}
                        color='secondary' type='text'
                        label='Enter Your name:'
                        name="studName"  value={student.studName} onChange={setDetails}
                    ></TextField>
                     <br/>
                     <TextField variant='filled' className={classes.root}
                        color='secondary' type='text'
                        label='Enter Department:'
                        name="studDepartment"  value={student.studDepartment} onChange={setDetails}
                    ></TextField>
                     <br/>
                     <TextField variant='filled' className={classes.root}
                        color='secondary' type='text'
                        label='Enter Year:'
                        name="studYear" value={student.studYear} onChange={setDetails}
                    ></TextField>
                     <br/>
                     <TextField variant='outlined' size='small' className={classes.root}
                        type="submit"  value="ADD STUDENTS"
                    ></TextField>
                     <br/>
                </form>
                : <Navigate to="/students/showall"></Navigate>}
        </div>
    )
}