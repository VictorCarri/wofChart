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
	let spinLabels = ["C", "M in Game", "First A in AMERICA'S", "I in AMERICA'S", "G", "I in WIN", "E in America's", "M in AMERICA'S", "P", "R", "Second A in AMERICA'S", "E in GAME", "S in SPIN", "W", "N in SPIN", "Ampersand", "Triple star", "N in WIN", "Single star", "Apostrophe", "S in AMERICA'S", "I in SPIN", "Double star"];
	let spinDataLabels = Object.keys(this.chartInfo);
	console.log("Spin data labels: %o", spinDataLabels);
	var colourData = ["#800080", "#E4A0F7", "#8F00FF"];

	for (let i = 0; i < 7; i++)
	{
		colourData.push("#80080");
		colourData.push("#E4A0F7");
		colourData.push("#8F00FF");
	}

	console.log("Colour data: %o", colourData);
	let realData = Object.values(this.chartInfo);
	console.log("Real data: %o", realData);
	this.createChart(spinDataLabels, realData, colourData);
      }
    });
  }

  createChart(labeldata: any, realdata: any, colordata: any) {}
}
