import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { GeneralComponent } from './general/general.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}