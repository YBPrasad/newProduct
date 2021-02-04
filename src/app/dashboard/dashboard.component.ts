import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authaSer:AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authaSer.signOut();
  }

}
