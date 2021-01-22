import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/state';
import { Store } from '@ngrx/store';
import { loadOrganisationAction } from '../state/organisations/organisations.actions';
import { Organisation } from '../models/organisation';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
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
    return `${data.organisation} - ${data.date}`;
  }

}
