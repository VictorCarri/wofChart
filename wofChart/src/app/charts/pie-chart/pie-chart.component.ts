/*import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent {

}*/
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from '../chart.service';
import { ChartBaseComponent } from '../chart-base/chart-base.component';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent extends ChartBaseComponent {
  public constructor(public override service: ChartService) {
    super(service);
  }

  override createChart(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes the type of chart
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No of spins',
            data: realdata,
            backgroundColor: colordata,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2,
      },
    });
  }
}
