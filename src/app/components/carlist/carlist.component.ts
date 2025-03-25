import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarApiService } from '../../service/car-api.service';
import { Car, NewCar } from '../../interface/car';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-carlist',
  imports: [CommonModule, CarComponent],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent {

  carsData: Car | any
  show: boolean = false

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

    this.getCars()

    return false;
  }

  refreshCars()
  {
    this.getCars();

  }


}
