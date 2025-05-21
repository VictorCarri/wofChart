/*import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-base',
  imports: [],
  templateUrl: './chart-base.component.html',
  styleUrl: './chart-base.component.css'
})
export class ChartBaseComponent {

}*/
import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-chart-base',
  templateUrl: './chart-base.component.html',
  styleUrls: ['./chart-base.component.css'],
})
export class ChartBaseComponent implements OnInit {
  public chart: any;
  private chartInfo: any;
  private labeldata: any[] = [];
  private realdata: any[] = [];
  private colordata: any[] = [];

  constructor(public service: ChartService) {}

  ngOnInit(): void {
    this.service.getChartInfo().subscribe((response: any) => {
      this.chartInfo = response;
      if (this.chartInfo != null) {
        /*for (let i = 0; i < this.chartInfo.length; i++) {
          this.labeldata.push(this.chartInfo[i].year);
          this.realdata.push(this.chartInfo[i].amount);
          this.colordata.push(this.chartInfo[i].colorcode);
        }
        this.createChart(this.labeldata, this.realdata, this.colordata);*/
	console.log(this.chartInfo);
      }
    });
  }

  createChart(labeldata: any, realdata: any, colordata: any) {}
}
