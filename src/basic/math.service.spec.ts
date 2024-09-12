import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

// describe

// it - individual test

//expect - used to define the expected outcomes

describe('MathService', () => {
  // is a part of jasmine

  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new MathService();
  });

  afterEach(() => {});

  beforeAll(() => {});

  afterAll(() => {});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // 2. check add of two numbers

  it('shoul add two numbers correctly', () => {
    const result = service.add(10, 20);
    expect(result).toEqual(30);
  });

  it('shoul substract two numbers correctly', () => {
    const result = service.subtract(20, 10);
    expect(result).toEqual(10);
  });

  it('shoul multiply two numbers correctly', () => {
    const result = service.multiply(10, 20);
    expect(result).toEqual(200);
  });

  it('shoul divide two numbers correctly', () => {
    const result = service.devide(200, 10);
    expect(result).toEqual(20);
  });
});
