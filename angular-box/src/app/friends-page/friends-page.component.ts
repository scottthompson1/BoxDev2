import { Component, OnInit } from '@angular/core';
import { BoxEvent } from '../objects/box-event';
import { Box } from '../objects/box';
import { FirebaseCRUDService } from '../services/firebase-crud.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {

  events: BoxEvent[] = [];
  boxes: Box[] = [];
  boxess = new Object();
  

  constructor(private crudService:FirebaseCRUDService) { }

  ngOnInit(): void {
    this.fetchActivity();
    const user = JSON.parse(localStorage.getItem("user") || '{}')
    if(user['uid'] !== null){
      this.getAllBoxes(user["uid"])
    }
    
  }

  async fetchActivity() {
    this.events = await this.crudService.getAllUsers();
   }
  
  async getAllBoxes(userID: string){
    this.boxes = await this.crudService.get_all_boxes(userID);
    this.getDataForBox(this.boxes);

  }

  getDataForBox(boxes: Box[]){
    //simply add the boxes here
    let test: BoxEvent = {
      actNum: 'hsdfsd',
      image: 'sdfds',
      prodCode: 'nime',
      action: 'open',
      date: 'hh',
      duration: 'test'
    } 

    boxes.forEach((boxInstance, index) => {
      boxInstance['events'] = [test];
    }
    );
  }
}
