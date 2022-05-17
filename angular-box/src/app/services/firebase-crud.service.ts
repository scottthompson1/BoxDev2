import { Injectable } from '@angular/core';
import {AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCRUDService {

  constructor(public fireservices: AngularFirestore) { }

  create_New_Record(record: Object){
    console.log(record);
    return this.fireservices.collection('test').add(record);
  }
}
