import { Component ,OnInit} from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
 
  constructor(private shard:SharedService) {}

  selectedDesignation:any;
  loacldata:[]=[]
  registerUsers :any;
  name:any
  des:any
  sal:any
  registerUpdateUser:any[]=[]
  ngOnInit():void{
      // will log the entire data object
      this.registerUsers= this.shard.getObj()
      this.selectedDesignation = this.registerUsers.desig

      const loacldata =localStorage.getItem('signUpUsers')
     
      this.name=this.registerUsers.name
      this.des=this.registerUsers.desig
      this.sal=this.registerUsers.salray
      
    }

   

onUpdate(id:any){
  const loacldata =localStorage.getItem('signUpUsers')
 
  if(loacldata != null){
    this.registerUpdateUser =JSON.parse(loacldata)
    } 
  const recored = this.registerUpdateUser.find(m=>m.studentId == id)
  recored.name = this.name
  recored.desig = this.des
  recored.salray = this.sal
  localStorage.setItem('signUpUsers',JSON.stringify(this.registerUpdateUser))
  window.location.reload();
}


   
}



