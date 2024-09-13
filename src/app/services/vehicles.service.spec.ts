import { TestBed } from '@angular/core/testing';
import { VehiclesService } from './vehicles.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('VehiclesService', () => {
  let service: VehiclesService;
  let httpTestingController: HttpTestingController;
  let arrayOfVehicles: {};
  let url: string = 'https://localhost:7010/Vehicle/vehicles';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(VehiclesService);
    httpTestingController = TestBed.inject(HttpTestingController);
    arrayOfVehicles = service.mockBookArray;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should returns all vehicles', () => {
  //   service.getVehicles().subscribe((resp) => {
  //     expect(resp).toEqual(JSON.stringify(arrayOfVehicles));
  //   });

  //   const req = httpTestingController.expectOne(url);
  //   expect(req.request.method).toBe('GET');

  //   req.flush(arrayOfVehicles);
  // });
});
