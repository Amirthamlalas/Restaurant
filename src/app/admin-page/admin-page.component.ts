import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {


username=""
password=""

constructor(){}



login=()=>{
  let data:any={"username":this.username,"password":this.password}
  console.log(data)
  }

}
