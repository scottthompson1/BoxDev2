import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../objects/product';
import { ProductService } from '../services/product.service';
import { BoxEvent } from '../objects/box-event';
import { FirebaseCRUDService } from '../services/firebase-crud.service';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.component.html',
  styleUrls: ['./activity-page.component.css']
})
export class ActivityPageComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  errorMessage: string = '';
  sub!: Subscription; 
  events: BoxEvent[] = [];

  constructor(private productService: ProductService, private crudService:FirebaseCRUDService) { }

  ngOnInit(): void {
    this.fetchActivity();
    this.getActivity();
  }
  
  async fetchActivity() {
    this.events = await this.crudService.getAllUsers();
    console.log("Succeed?");
    console.log(this.events);
    console.log("Succeed?");
   }
  
  getActivity(): void{
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      }, // json data is showing up here
      error: err => this.errorMessage = err
    });
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

}
