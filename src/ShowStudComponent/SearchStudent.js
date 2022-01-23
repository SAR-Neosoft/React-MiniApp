
import { useSelector,useDispatch } from "react-redux";


export function SearchStudent(prop){
console.log("prop ye"+prop.studId);
 
    let studAr=useSelector((store)=>store.StudReducer);
    
    return(
        <>
       
        {
            studAr.map((student)=>{
                    console.log("iddddddddddddd"+ prop.st)
                   return(( student.studId==prop.st)?
                   <tr key={student.studId}><td>{student.studId}</td>
                    <td>{student.studName}</td>
                    <td>{student.studDepartment}</td>
                    <td>{student.studYear}</td>
                    </tr>:<></>
                   ); 
                })
        }
    </>
    );
}