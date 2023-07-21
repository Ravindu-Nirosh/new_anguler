import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/Material_Module';
import { FormControl, FormGroup, FormsModule,Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared/shared.service';



@Component({
  selector: 'a pp-login',
  standalone: true,
  imports: [CommonModule,MaterialModule,FormsModule,FontAwesomeModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  

loginForm =new FormGroup({
  userName:new FormControl('',[Validators.required]),
  designation:new FormControl('',Validators.required),
  salary:new FormControl('',Validators.required)
})

get userName(){
  return this.loginForm.get('userName')
}

get designation(){
  return this.loginForm.get('designation')
}

get salary(){
  return this.loginForm.get('salary')
}
designationList =['Manager','IT Manager','Devaloper',]
constructor(private dialogRef:MatDialog,private shared:SharedService){}

ngOnInit():void{
  const loacldata =localStorage.getItem('signUpUsers')
 
  if(loacldata != null){
    this.registerUsers =JSON.parse(loacldata)
  }
}

openDialog(id:any){
  for (let i=0;i<this.registerUsers.length;i++){
    if(this.registerUsers[i].studentId==id){
      this.shared.setObj(this.registerUsers[i])
    }
  }
  
  this.dialogRef.open(PopUpComponent)
}


faTrash=faTrashAlt;
faEdit=faEdit;

 registerUsers :any[]=[];
 registerObj:any={
  studentId:0,
  name:'',
  desig:'',
  salray:''
 }


 onRegister(){
  this.registerObj.studentId=this.registerUsers.length+1
  this.registerObj.name = this.loginForm.get('userName')!.value;
  this.registerObj.desig = this.loginForm.get('designation')!.value;
  this.registerObj.salary = this.loginForm.get('salary')!.value;
  this.registerUsers.push(this.registerObj)
  localStorage.setItem('signUpUsers',JSON.stringify(this.registerUsers))
  this.registerObj={
    studentId:0,
    name:'',
    desig:'',
    salray:''
   }
 }

 onReset(){
  this.loginForm.reset();
 }


 onEdit(std:any){
  debugger
  
 }

 onDelete(id:any){
    for (let i=0;i<this.registerUsers.length;i++){
      if(this.registerUsers[i].studentId==id){
        this.registerUsers.splice(i,1)
        localStorage.setItem('signUpUsers',JSON.stringify(this.registerUsers))
      }
    }
 }
}


