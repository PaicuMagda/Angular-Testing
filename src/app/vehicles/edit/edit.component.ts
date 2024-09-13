import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  @Input() componentName: string = 'Vehicle Component';
}
