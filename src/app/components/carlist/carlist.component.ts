import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarApiService } from '../../service/car-api.service';
import { Car, NewCar } from '../../interface/car';

@Component({
  selector: 'app-carlist',
  imports: [CommonModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {

  private carsData: Car | any
  private choice: boolean = false

  constructor(private _carAPIService:CarApiService)
  {
  }

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

  addCar(make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:Car;
    addCar=new NewCar(make,model,year,imageUrl);
    this._carAPIService.addCarDetails(addCar).subscribe(carsData =>
      { this.carsData = carsData}
    );

    return false;
  }


}
