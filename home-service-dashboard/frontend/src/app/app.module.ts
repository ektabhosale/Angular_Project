import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResisterComponent } from './component/resister/resister.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AddMyServiceComponent } from './component/add-my-service/add-my-service.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RoughComponent } from './rough/rough.component';

@NgModule({
  declarations: [
    AppComponent,
    ResisterComponent,
    HomeComponent,
    LoginComponent,
    AddMyServiceComponent,
    NavBarComponent,
    RoughComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
