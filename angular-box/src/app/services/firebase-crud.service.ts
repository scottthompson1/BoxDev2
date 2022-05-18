import { Injectable } from '@angular/core';
import {AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { BoxEvent } from '../objects/box-event';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCRUDService {

  constructor(public fireservices: AngularFirestore) { }

  create_New_Record(record: Object){
    //console.log(record);
    return this.fireservices.collection('test').add(record);
  }

  read_All_Records(){
    console.log("Retrieving Records");
    return this.fireservices.collection('test').snapshotChanges();
  }

  getAllUsers() {
    return new Promise<any>((resolve)=> {
    this.fireservices.collection('test').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
   }
  
}
