// export const ShowStudents=()=>{
//     return{
//         type:'SHOWSTUDENTS'
//     }
// }

export const addStudent=(stud)=>{
    return{
        type:'ADDSTUDENTS',
        payload:stud
    }
}

export const delStudents=(stdId)=>{
    return{
        type:'DELETESTUDENTS',
        payload:stdId
    }
}

export const serStudents=(stdId)=>{
    return{
        type:'SEARCHSTUDENTS',
        payload:stdId
    }
}
    export const updateStudents=(stud)=>{
        return{
            type:'UPDATESTUDENTS',
            payload:stud
        }

    }