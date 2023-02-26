import { Component, OnInit } from '@angular/core';
import { Root } from './interface/apiinterface';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private apiservice: ApiService) {}


  cityName : string = "Wellington";
  weatherData?: Root;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName : string){
   return this.apiservice.getweatherdata(cityName).subscribe({
      next: (respones) => {
        this.weatherData = respones;
      },
    });
  }
}
