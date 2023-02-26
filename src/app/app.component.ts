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

weatherData? : Root;

  ngOnInit(): void {
    this.apiservice.getweatherdata('Wellington').subscribe({
      next: (respones) => {
        this.weatherData = respones;
      },
    });
  }

  


}
