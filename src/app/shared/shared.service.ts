import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  usersObj:any;
  constructor() { }

  setObj(data:any){
    this.usersObj=data
  }

  getObj(){
    return this.usersObj
  }
}
