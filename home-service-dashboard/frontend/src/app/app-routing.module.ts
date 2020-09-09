import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResisterComponent} from './component/resister/resister.component';
import {LoginComponent} from './component/login/login.component'
import {HomeComponent} from './component/home/home.component'
import {AddMyServiceComponent} from './component/add-my-service/add-my-service.component'
import {RoughComponent} from './rough/rough.component'

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:ResisterComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'rough',component:RoughComponent
  },
  {
    path:'addService/:id',component:AddMyServiceComponent
  },
  {
    path:'addService',component:AddMyServiceComponent
  },
  
  {
    path:'**',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
