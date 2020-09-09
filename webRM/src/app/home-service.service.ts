import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  students =[
    {id:101,name: 'Abc', description:'alexjefhe', email:'abc@rmail.com'},
    {id:102,name: 'Abc', description:'alexjefhe', email:'abc@rmail.com'}
  ]

  constructor() {}
    public getStudents(): Array<{id,name,description,email}>{
      return this.students;}
      public createStudents(students:{id,name,description,email}) {
         this.students.push(students);
        }
   }

