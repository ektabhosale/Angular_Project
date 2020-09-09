import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student;
  selectedStudent;

  constructor(public homeService: HomeServiceService) { }

  ngOnInit(): void {
  }
public selectStudent(student){
  this.selectStudent=student;
}
}
