import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

//@Output sends data from child to parent

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {}
