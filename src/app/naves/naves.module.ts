import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesComponent } from './naves.component';
import { NaveDetailComponent } from './naveDetail/naveDetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavesComponent, NaveDetailComponent],
  exports: [NavesComponent, NaveDetailComponent]
})
export class NavesModule { }
