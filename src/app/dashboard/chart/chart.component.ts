import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  Highcharts=Highcharts
  chartOptions={};
  value=[1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Summary of Users'
      },
      subtitle: {
          text: 'Users'
      },
     
      tooltip: {
          split: true,
          valueSuffix: ' ten'
      },
      yAxis:{
        labels:{
          formatter:function(){
            return this.value;
          },
          
        },
        title:{
          text:'no of users',
        }
      },
      xAxis:{
        title:{
          text:'Date',
        },
        type:'datetime',
        labels:{
          formatter:function(){
            return Highcharts.dateFormat('%H:%M %d %b %Y',this.value);
          }
        }
        
      },
      credits:{
        enabled:false
      },
      exporting:{
        enabled:true
      },
      responsive:{
        rules:[{
          condition:{
            maxWidth:500
          },
          chartOptions:{
            legend:{
              enabled:false
            }
          }
        }]
      },
      series: [
        {
          name: 'Consultant',
          data: [0,2,4,7,8,9,11,13],
          
      },
        {
          name: 'Client',
          data: [0,3,4,5,6,8,10,12]
      },]
  };
  HC_exporting(Highcharts);

  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }

}
