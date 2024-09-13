import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';

fdescribe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a default component name', () => {
    expect(component.componentName).toBe('Vehicle Component');
  });

  it('should accept and display a custom component name via @Input', () => {
    component.componentName = 'Custom Component Name';
    fixture.detectChanges();
    expect(component.componentName).toBe('Custom Component Name');
  });
});
