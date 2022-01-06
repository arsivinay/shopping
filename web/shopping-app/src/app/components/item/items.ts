import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})
export class item implements OnInit {

    details=[];
  constructor(private product:ServiceService) { }

  ngOnInit(): void {
    this.product.getApiDataFromJson().subscribe(data => {
      this.details = data['sample'];
      console.log(this.details[0]['description'])
    });
  }
}
