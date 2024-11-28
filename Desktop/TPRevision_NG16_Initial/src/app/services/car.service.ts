import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../modal/voiture';

const url = 'http://localhost:3000/voitures';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  readonly http:HttpClient = inject(HttpClient);

  //get all cars
  getAllCars():Observable<Voiture[]>{
    return this.http.get<Voiture[]>(url);
  }

  constructor() { }
}
