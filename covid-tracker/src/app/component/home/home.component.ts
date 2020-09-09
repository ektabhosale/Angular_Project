import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { OverallData } from 'src/app/models/overall-d';
import { GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
totalConfirmed=0;
totalRecovered=0;
totalDeaths=0;
totalActive=0;
globalData:OverallData[];
pieChart:GoogleChartInterface={
  chartType:'PieChart'
}
columnChart:GoogleChartInterface={
  chartType:'ColumnChart'
}



  constructor(private dataService: DataServiceService) { }



  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe(
      {
        next : (result) =>{
          console.log(result);
          this.globalData=result;

          result.forEach(cs => {
            if (!Number.isNaN(cs.confirmed)) {
              this.totalActive += cs.active
              this.totalConfirmed += cs.confirmed
              this.totalDeaths += cs.deaths
              this.totalRecovered += cs.active
            }

          })

          this.initChart('c');
        }
      }
    )
  }
  updateChart(input: HTMLInputElement) {
    console.log(input.value);
    this.initChart(input.value);
  }
  initChart(caseType: string){

    let datatable=[];
    datatable.push(["Country","Cases"])
    this.globalData.forEach(cs=>{
      if(cs.confirmed>200000)
        datatable.push([
        cs.country,cs.confirmed
        ])
    })
  
    this.pieChart = {
      chartType: 'PieChart',
      dataTable:datatable ,
      //firstRowIsData: true,
      options: {height:500},
    };
    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable:datatable ,
      //firstRowIsData: true,
      options: {height:500},
    };
  }
  
}
