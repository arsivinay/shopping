import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss']
})
export class ItemDescriptionComponent implements OnInit {

  
  details=[];
  constructor(private product:ServiceService) { }
  
  ngOnInit(): void {
    this.product.getApiDataFromJson().subscribe(data => {
      this.details = data['sample'];
      console.log(this.details[0]['description'])
    });
  }
}
