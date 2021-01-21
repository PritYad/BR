import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationsComponent } from './organisations/organisations.component';

export const routes: Routes = [
  { path: 'reports', component: OrganisationsComponent },
  { path: '', redirectTo: '/reports', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

