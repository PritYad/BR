import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesComponent } from './buses/buses.component';
import { OrganisationsComponent } from './organisations.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OrganisationsComponent
  }
];

@NgModule({
  declarations: [BusesComponent, OrganisationsComponent],
  exports: [OrganisationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class OrganisationsModule { }
