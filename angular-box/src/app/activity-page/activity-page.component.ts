import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../objects/product';
import { ProductService } from '../services/product.service';
import { BoxEvent } from '../objects/box-event';
import { FirebaseCRUDService } from '../services/firebase-crud.service';
import { Box } from '../objects/box';

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
  boxes: Box[] = [];
  isLoading = true;
  

  constructor(private productService: ProductService, private crudService:FirebaseCRUDService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem("user") || '{}')
    if(user['uid'] !== null){
      this.getAllBoxes(user["uid"]).then(()=>{this.isLoading==false})

    }
    //this.fetchActivity();
    //this.getActivity();
  }
  
  async getAllBoxes(userID: string){
    this.boxes = await this.crudService.get_all_boxes(userID);
    this.getDataForBox(this.boxes);
  }

  getDataForBox(boxes: Box[]){
    const alt = JSON.parse(localStorage.getItem("user") || '{}')
    if(alt['uid'] == null) return
    boxes.forEach(async (boxInstance, index) => {
      this.boxes[index]['events'] = await this.crudService.get_events_for_box(alt['uid'], boxInstance.boxid);
    }
    );
  }

  async fetchActivity() {
    this.events = await this.crudService.getAllUsers();
   }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe;
    }
  }

}


   /*
  getActivity(): void{
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
      }, // json data is showing up here
      error: err => this.errorMessage = err
    });
  }

``*/