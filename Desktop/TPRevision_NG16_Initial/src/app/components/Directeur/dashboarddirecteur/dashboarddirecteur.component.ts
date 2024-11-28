import { Component, OnInit } from '@angular/core';
import { Voiture } from '../../../modal/voiture';
import { CarService } from '../../../services/car.service';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { ImmatriculationPipe } from '../../../pipes/immatriculation.pipe';

@Component({
  selector: 'app-dashboarddirecteur',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, ImmatriculationPipe],
  templateUrl: './dashboarddirecteur.component.html',
  styleUrls: ['./dashboarddirecteur.component.css']
})
export class DashboarddirecteurComponent implements OnInit {
  cars: Voiture[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
      console.log(this.cars);
    });
  }
}
