import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db:AngularFirestore) { }

  getAllConsultant(){
    return this.db.collection('Consultants').snapshotChanges();
  }
}
