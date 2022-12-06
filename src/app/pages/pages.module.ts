import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Module Routing
import { RoutingModule } from './routing.module';
//pages
import { GeneralComponent } from './general/general.component'; 
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GeneralComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
