import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService implements OnInit {
  private url: string = 'https://localhost:7010/Vehicle/vehicles';
  mockBookArray: {};
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }

  ngOnInit(): void {
    this.getVehicles().subscribe((resp) => {
      this.mockBookArray = JSON.stringify(resp);
    });
  }
}
