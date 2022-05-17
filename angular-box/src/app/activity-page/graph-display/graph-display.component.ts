import { Component, OnInit } from '@angular/core';
import { FirebaseCRUDService } from 'src/app/services/firebase-crud.service';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.css']
})
export class GraphDisplayComponent implements OnInit {

  actNum: String = '';
  action: String = '';
  prodCode:String = '';
  date: String = '';
  duration: String = '';
  message:String = '';

  constructor(public crudservice:FirebaseCRUDService) { }

  ngOnInit(): void {
  }
  CreateRecord(){
    let record = {
      'actNum': this.actNum,
      'action': this.action,
      'prodCode': this.prodCode,
      'date': this.date,
      'duration': this.duration
    };
    this.crudservice.create_New_Record(record).then(res => {
      this.actNum = '';
      this.action = '';
      this.prodCode = '';
      this.date = '';
      this.duration = '';
      console.log(res);
      this.message = "Employee data save Done";
    }).catch(error => {
      console.log(error);
    });
    console.log("exited");
  }
}
