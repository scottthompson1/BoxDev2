import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { BoxEvent } from '../objects/box-event';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCRUDService {

  constructor(public fireservices: AngularFirestore) { }

  create_New_Record(record: Object){ // with test data
    //console.log(record);
    return this.fireservices.collection('test').add(record);
  }

  read_All_Records(){   // with test data
    console.log("Retrieving Records");
    return this.fireservices.collection('test').snapshotChanges();
  }

  read_All_Specific_Box(uid: string){
    return this.fireservices.collection(uid).snapshotChanges;
  }

  getAllUsers() {
    return new Promise<any>((resolve)=> {
    this.fireservices.collection('test').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
   }

  //________________New API with Real Data___________________________________

  get_all_boxes(userid: string){
    return new Promise<any>((resolve)=>{
    this.fireservices
      .collection('users')
      .doc(userid)
      .collection('box')
      .valueChanges({idField: 'id'})
      .subscribe(boxes => resolve(boxes));
    })
  }
  get_events_for_box(userid: string, boxId: string){
    return new Promise<any>((resolve)=>{
      this.fireservices
        .collection('users')
        .doc(userid)
        .collection('box')
        .doc(boxId)
        .collection('events')
        .valueChanges({idField: 'id'})
        .subscribe(boxes => resolve(boxes));
      })
  }
  upload_event_for_box(userid: string, boxId: string, record: Object){
    console.log("Uploading box event for specific box");
    return new Promise<any>((resolve)=>{
      this.fireservices
      .collection('users')
      .doc(userid)
      .collection('box')
      .doc(boxId)
      .collection('events') //Will this be autogenerated when call is made
      .add(record);
    }
    )

  }
  get_all_friends(userid: string, boxId: string, record: Object){
    console.log("getting friends from users");
    return new Promise<any>((resolve) => {
      this.fireservices
      .collection('users')
      .doc(userid)
    })

  }
  upload_new_friend(friendID: string){

  }
  follow_friend_box(boxID: string){

  }

}
