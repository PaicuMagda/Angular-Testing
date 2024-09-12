import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  constructor() {}

  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }

  multiply(a: number, b: number) {
    return a * b;
  }

  devide(a: number, b: number) {
    if (b === 0) {
      throw new Error('Nu se poate imparti un numar la 0');
    } else return a / b;
  }
}
