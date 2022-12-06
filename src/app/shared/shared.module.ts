import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { GeneralHeaderComponent } from './general-header/general-header.component';



@NgModule({
  declarations: [
    GeneralHeaderComponent
  ],
  exports: [
    GeneralHeaderComponent
  ],  
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
