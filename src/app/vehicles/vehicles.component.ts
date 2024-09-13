import { Component, inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiclesService } from '../services/vehicles.service';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [AsyncPipe, CommonModule, NgFor, RouterModule, EditComponent],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent implements OnInit {
  vehicles$: Observable<any[]>;
  componentName: string = 'parent-component';

  constructor(
    private vehiclesServices: VehiclesService,
    private router: Router
  ) {}

  goToDetails() {
    return this.router.navigate(['details']);
  }

  goToEdit() {
    return this.router.navigate(['edit']);
  }

  displaySalut() {
    console.log('Salut!');
  }

  ngOnInit(): void {
    this.vehicles$ = this.vehiclesServices.getVehicles();
  }
}
