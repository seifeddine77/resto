import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchForm: FormGroup;
  weather: any = {};
  codehtml: any;
  title: string;
  result:any;
  constructor(private fb: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit() {
    this.searchForm = this.fb.group(
      {
        town: ['']
      }
    )

  }
  searchByTown() {
    this.title = this.searchForm.value.town;
    console.log('here town', this.searchForm.value);

    this.weatherService.addlocation(this.searchForm.value).subscribe(
      (data) => {

        this.result = data.result;
        console.log('result', this.weather);

      }
    )

  }

}
