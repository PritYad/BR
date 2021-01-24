import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/state';
import { Store } from '@ngrx/store';
import { loadOrganisationAction } from '../state/organisations/organisations.actions';
import { Organisation, BusData } from '../models/organisation';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html'
})

export class OrganisationsComponent implements OnInit {
  organisationsState: AppState;
  organisationsList: Organisation[] = [];

  formGroup: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe().subscribe(state => {
      const data = state.organisationsState.organisations;
      if (data.length > 0 && !state.organisationsState.isRetrievingData) {
        this.organisationsList = data;
      }
    });
    this.store.dispatch(loadOrganisationAction());
  }

  sectionHeader(data: Organisation) {
    const date = data.date === null || data.date ===  undefined ? '-' : data.date;
    return `${data.organisation} - ${date}`;
  }
}


