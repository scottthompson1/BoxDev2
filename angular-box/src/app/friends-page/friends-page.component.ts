import { Component, OnInit } from '@angular/core';
import { BoxEvent } from '../objects/box-event';
import { BoxList } from '../objects/box-list';
import { FirebaseCRUDService } from '../services/firebase-crud.service';

@Component({
  selector: 'app-friends-page',
  templateUrl: './friends-page.component.html',
  styleUrls: ['./friends-page.component.css']
})
export class FriendsPageComponent implements OnInit {

  events: BoxEvent[] = [];
  boxes: BoxList[] = [];

  constructor(private crudService:FirebaseCRUDService) { }

  ngOnInit(): void {
    this.fetchActivity();
    this.getAllBoxes("26ZdxxcDPpU2sFE9dqfPn9HioCt1");
  }

  async fetchActivity() {
    this.events = await this.crudService.getAllUsers();
   }
  
   async getAllBoxes(userID: string){
    this.boxes = await this.crudService.get_all_boxes(userID);

   }
}
