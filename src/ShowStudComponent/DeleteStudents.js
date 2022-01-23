import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { delStudents } from "../Actions/StudAction";

function DeleteStudents(){

    let {id}=useParams();
    console.log(id);
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(delStudents(parseInt(id)));
    },[]);
    return (
    <>
    <h2 >Student deleted successfully.....</h2>
    <Navigate to="/students/showall"></Navigate>
    
    </>
    )
    
}

export default DeleteStudents;