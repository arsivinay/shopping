import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.scss']
})
export class CatagoryComponent implements OnInit {
  
  constructor() { }
  onClickSubmit(result:any) {
    alert(result.username);
    console.log("You have entered : " + result.username); 
 }
  ngOnInit(): void {
  }

}
