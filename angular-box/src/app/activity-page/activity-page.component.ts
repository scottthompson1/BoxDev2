import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../objects/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  errorMessage: string = '';
  sub!: Subscription; 

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        console.log(products);
      }, // json data is showing up here
      error: err => this.errorMessage = err
    });
    //below log gets executed immediately after http call is sent, not when response is recieved
    console.log("Hellossssss")
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

}
