import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private httpClient: HttpClient) { }

	getChartInfo() {
    return this.httpClient.get('http://wof-spring-boot-test-env.eba-is45gqj2.ca-central-1.elasticbeanstalk.com/countAll');
  }
}
