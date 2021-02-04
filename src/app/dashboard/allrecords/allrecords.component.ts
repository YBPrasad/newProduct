import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FunctionService } from '../services/function.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-allrecords',
  templateUrl: './allrecords.component.html',
  styleUrls: ['./allrecords.component.css']
})
export class AllrecordsComponent implements OnInit {

  consultantList:any={};
  consultants:any
  key=''
  name=''
  downloadUrl=''
  email=''
  currentEmail=''
  currentName=''
  currentCategory=''
  constructor(private adminSer:AdminService,private funcSer:FunctionService) { }

  ngOnInit(): void {
    this.getConsultants();
  }

  getConsultants(){

    this.funcSer.getAllConsult().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>({
          key:c.payload.key,
          ...c.payload.val()
        }))
      )
    ).subscribe(data=>{
      this.consultants=data;
      this.funcSer.lengths=this.consultants.lenght
    })


    // this.consultants=[]
    // this.funcSer.getAllConsult().subscribe((data)=>{
    //   for(let d in data){
    //     this.consultants.push({
    //       id:d,
    //       data:data[d]
    //     })
    //   }
    //   console.log(this.consultants);
    // })
  }

  updatetoValid(key:any){
   this.funcSer.updateConsultant(key,{isValid:true}).then(()=>{
     this.getConsultants();
   })
  }
  updatetoInvalid(key:any){
    this.funcSer.updateConsultant(key,{isValid:false}).then(()=>{
      this.getConsultants();
    })
  }

  moreDetails(email:any,name:any,category:any){
    this.currentEmail=email
    this.currentName=name
    this.currentCategory=category
  }
}


