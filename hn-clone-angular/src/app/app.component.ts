import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hn-clone-angular';
  base_url="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  str1="https://hacker-news.firebaseio.com/v0/item/"
  items = [];
  new_story_array=[];

  constructor(private http:HttpClient){
    this.http.get(this.base_url).toPromise().then(data =>{
      console.log(data);

      for(let key in data)
      if(data.hasOwnProperty(key))
      this.items.push(data[key])
      console.log(this.items[0])
        for (let i = 0; i < 50; i++) {
          let story_url=this.str1 + this.items[i]+".json"
          this.http.get(story_url).toPromise().then(res =>{
            this.new_story_array.push(res)
            
            
          })
            
        
        }

        
    })
  }
}
