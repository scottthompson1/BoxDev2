import { Component, OnInit } from '@angular/core';
import { Box } from 'src/app/objects/box';
import { FirebaseCRUDService } from 'src/app/services/firebase-crud.service';

@Component({
  selector: 'app-box-add',
  templateUrl: './box-add.component.html',
  styleUrls: ['./box-add.component.css']
})
export class BoxAddComponent implements OnInit {
  boxName: string = '';
  constructor(private crudService:FirebaseCRUDService) { }

  ngOnInit(): void {
  }
  
  addBox(){
    
    //getUserId and then pass to document
    const user = JSON.parse(localStorage.getItem("user") || '{}')
    console.log("User" + user['uid'])
    if(user['uid'] !== null){
      var response = this.crudService.upload_new_box(user['uid'], this.boxName)
    }
  }

}
