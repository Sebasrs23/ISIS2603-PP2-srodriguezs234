import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesComponent } from './naves.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavesComponent],
  exports: [NavesComponent]
})
export class NavesModule { }
