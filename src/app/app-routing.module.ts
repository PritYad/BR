import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationsComponent } from './organisations/organisations.component';

const navLinks: Routes = [
  { path: 'reports', component: OrganisationsComponent },
  { path: '', redirectTo: '/reports', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(navLinks)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [OrganisationsComponent];
