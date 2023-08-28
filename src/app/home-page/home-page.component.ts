import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
constructor(private route:Router){}
  cardClicked=()=>{
    console.log("card clicked")
    this.route.navigate(["/dessert"]);
  }
}
