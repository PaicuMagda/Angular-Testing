import { Routes } from '@angular/router';
import { EditComponent } from './vehicles/edit/edit.component';
import { DetailsComponent } from './vehicles/details/details.component';

export const routes: Routes = [
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
];
