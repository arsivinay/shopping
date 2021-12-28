import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ProductDetails: any = [];
 productItems:any =[];
  constructor(private service:ServiceService) { 
    this.service.getApiDataFromJson().subscribe(data => {
      this.ProductDetails = data;
    })
  }

  ngOnInit(): void {
  }
  getProducts(product:String){
    if(product=="men"){
      alert("Men");
      this.productItems=this.ProductDetails['ProductDetails']['mens'];
    }
    if(product=="women"){
      alert("women");
      this.productItems=this.ProductDetails['ProductDetails']['women'];
    }
    if(product=="kids"){
      alert("kids");
      this.productItems=this.ProductDetails['ProductDetails']['kids'];
    }
    if(product=="electronics"){
      alert("electronics");
      this.productItems=this.ProductDetails['ProductDetails']['Electronics'];
    }
    if(product=="utensils"){
      alert("utensils");
      this.productItems=this.ProductDetails['ProductDetails']['utensils'];
    }
  }
}
