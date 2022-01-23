import {Student } from './Student'


export class StudentImpl{
   studArray=new Set();
   constructor(){
       this.studArray.add(new Student(111,'sar','cse','SE'));
       this.studArray.add(new Student(222,'abd','IT','SE'));
   }
        
    getAllStudents(){
    
        return [...this.studArray];
    }
    addStudent(stud){
        let st = new Student(parseInt(stud.studId),stud.studName,stud.studDepartment,stud.studYear)

        this.studArray.add(st);
        return [...this.studArray];
    }
    searchStudent(stdId){
      return [...this.studArray].find((student)=>student.studId===stdId);
    }

    updateStudent(stud){
        console.log("up ka studooo"+stud.studId);
        let st = new Student(parseInt(stud.studId),stud.studName,stud.studDepartment,stud.studYear)
        
        this.deleteStudent(stud.studId);
        this.studArray.add(st);
        return [...this.studArray];
    }
    
    deleteStudent(stdId){
        // console.log(stdId);
        // console.log(this.studArray)
        console.log("=======in delete======")
        let student=this.searchStudent(stdId);
        console.log(student);
        this.studArray.delete(student);
      
        return [...this.studArray];
    }
}