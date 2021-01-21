import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OrganisationsComponent } from './organisations/organisations.component';
import { BusesComponent } from './organisations/buses/buses.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/reducers';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationsComponent,
    BusesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({...reducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
