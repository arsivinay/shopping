import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(result:any) {
    alert(result.username);
    console.log("You have entered : " + result.username); 
 }
}
