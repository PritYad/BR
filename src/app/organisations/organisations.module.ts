import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesComponent } from './buses/buses.component';
import { OrganisationsComponent } from './organisations.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class OrganisationsModule { }
