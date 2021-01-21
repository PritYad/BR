import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesComponent } from './buses/buses.component';
import { OrganisationsComponent } from './organisations.component';

@NgModule({
  declarations: [BusesComponent, OrganisationsComponent],
  exports: [OrganisationsComponent],
  imports: [
    CommonModule
  ]
})
export class OrganisationsModule { }
