import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-catagory',
  templateUrl: './sub-catagory.component.html',
  styleUrls: ['./sub-catagory.component.scss']
})
export class SubCatagoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(result:any) {
    alert(result.username);
    console.log("You have entered : " + result.username); 
 }
}