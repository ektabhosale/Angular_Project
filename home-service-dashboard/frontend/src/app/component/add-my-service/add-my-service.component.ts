import { Component, OnInit } from '@angular/core';
import {WebServiceService} from '../../web-service.service'
import { from } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-add-my-service',
  templateUrl: './add-my-service.component.html',
  styleUrls: ['./add-my-service.component.css']
})
export class AddMyServiceComponent implements OnInit {
  alert:boolean=false;
  addMyService= new FormGroup({
    id: new FormControl(),
    title:  new FormControl(''),
    locality:  new FormControl(''),
    cost:  new FormControl(),
    remarks:  new FormControl(''),
    specification: new FormControl('')
  })
  constructor(private webService: WebServiceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.webService.getCurrentService(this.router.snapshot.params.id).subscribe((res)=>{
            // console.log(res);
            this.addMyService= new FormGroup({
              id: new FormControl(res['id']),
              title:  new FormControl(res['title']),
              locality:  new FormControl(res['locality']),
              cost:  new FormControl(res['cost']),
              remarks:  new FormControl(res['remarks']),
              specification: new FormControl(res['specification'])
            })
            
          })
          
    
  }
  postNewService(){
    // console.log(this.addMyService.value);
    this.webService.addNewService(this.addMyService.value).subscribe((result)=>{
      this.alert=true;
      this.addMyService.reset({})
      console.log("tada",result);
      
    })
   
   
  
}
updateMyService(){
 this.webService.updateService(this.router.snapshot.params.id,this.addMyService.value).subscribe((res)=>
 {
      console.log(res,"updated");
      
    })
}
closeAlert() {
  this.alert=false;
      
    }
}
