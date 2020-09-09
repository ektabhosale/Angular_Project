import { Component, OnInit } from '@angular/core';
import{DataServiceService} from "../../service/data-service.service"
import { OverallData } from 'src/app/models/overall-d';
import { DateWiseData } from 'src/app/models/date-wise-data';
import { GoogleChartInterface } from 'ng2-google-charts';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  data : OverallData[];
  countries: string[]=[]; 
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  dateWiseData;
  selectedCountryData : DateWiseData[];
  lineChart:GoogleChartInterface={
    chartType:'LineChart'
  }
  
  constructor(private service:DataServiceService) { }

  ngOnInit(): void {

merge(
  this.service.getDateWiseData().pipe(
    map(result=>{
      this.dateWiseData=result;
        // this.updateChart();
    })
  ),
  this.service.getGlobalData().pipe(
    map(result=>{
      
      this.data=result;
      this.data.forEach(cs=>{
        this.countries.push(cs.country)
        // this.updateChart();
    })
    })
  )
).subscribe(
  {
    complete:()=>{
      
    this.updateValues('India')
    }
  }
)
  }

  updateChart(){
    let dataTable=[];
    dataTable.push(['Date','Cases'])
    this.selectedCountryData.forEach(cs => {
      dataTable.push([cs.date,cs.cases])
    })
    this.lineChart = {
      chartType: 'LineChart',
      dataTable: dataTable,
      //firstRowIsData: true,
      options: {height:500},
    };
  }
  updateValues(country : string){
    console.log(country);
    this.data.forEach(cs=>{
    if(cs.country == country){
      this.totalActive=cs.active
      this.totalRecovered=cs.recovered
      this.totalConfirmed=cs.confirmed
      this.totalDeaths=cs.deaths
    }
    })
    this.selectedCountryData=this.dateWiseData[country]
    console.log(this.selectedCountryData);
    console.log("this.selectedCountryData");
this.updateChart();    
}

}
