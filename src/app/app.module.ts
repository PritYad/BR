import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routes } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { OrganisationsEffect } from './state/organisations/organisations.effects';
import { HttpClientModule } from '@angular/common/http';
import { OrganisationsModule } from './organisations/organisations.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    OrganisationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([OrganisationsEffect]),
    StoreModule.forRoot({...reducers}),
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
