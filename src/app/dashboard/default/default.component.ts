import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { FunctionService } from '../services/function.service';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(public clientSer:ClientService,public funcSer:FunctionService) { }

  ngOnInit(): void {
  }

}
