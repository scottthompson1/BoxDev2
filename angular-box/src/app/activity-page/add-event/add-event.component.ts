import { Component, OnInit } from '@angular/core';
import { FirebaseCRUDService } from 'src/app/services/firebase-crud.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  constructor(private crudService:FirebaseCRUDService) { }

  ngOnInit(): void {
  }

  addEventToBox(){
    //placeholder for sending event update to firebase for tooling
    
  }

}
