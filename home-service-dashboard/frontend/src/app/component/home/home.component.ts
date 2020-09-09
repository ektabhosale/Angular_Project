import { Component, OnInit } from '@angular/core';
import {WebServiceService} from '../../web-service.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 collection:any;
  constructor(private webService: WebServiceService) { }

  ngOnInit(): void {
    this.webService.getMyService().subscribe(
      (result=>{
        this.collection=result;
        console.log(result);
        
      })
    );
  }

}
