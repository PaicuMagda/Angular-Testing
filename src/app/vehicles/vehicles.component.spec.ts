import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesComponent } from './vehicles.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehiclesService } from '../services/vehicles.service';
import { Router } from '@angular/router';
import { EditComponent } from './edit/edit.component';

fdescribe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy;
  let consoleSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclesComponent, HttpClientTestingModule, EditComponent],
      providers: [VehiclesService],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    navigateSpy = spyOn(router, 'navigate');
    consoleSpy = spyOn(console, 'log');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to details component if goToDetails is called', () => {
    component.goToDetails();
    expect(navigateSpy).toHaveBeenCalledWith(['details']);
  });

  it('should navigate to edit component if goToEdit function is called', () => {
    component.goToEdit();
    expect(navigateSpy).toHaveBeenCalledWith(['edit']);
  });

  it('should display Salut if displaySalut function is called', () => {
    component.displaySalut();
    expect(consoleSpy).toHaveBeenCalledWith('Salut!');
  });
});
