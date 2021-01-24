import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/state';
import { Store } from '@ngrx/store';
import { loadOrganisationAction } from '../state/organisations/organisations.actions';
import { Organisation } from '../models/organisation';
import { FormGroup } from '@angular/forms';

interface OrganisationSectionDetails extends Organisation {
  showBusData?: boolean;
  notes?: string;
}
@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html'
})

export class OrganisationsComponent implements OnInit {
  organisationsState: AppState;
  organisationsList: OrganisationSectionDetails[] = [];

  formGroup: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe().subscribe(state => {
      const data = state.organisationsState.organisations;
      if (data.length > 0 && !state.organisationsState.isRetrievingData) {
        this.fetchOrganisationDetails(data);
      }
    });
    this.store.dispatch(loadOrganisationAction());
  }

  fetchOrganisationDetails(data: Organisation[]) {
    this.organisationsList = [];
    data.forEach(ele => {
      this.organisationsList.push({
        ...ele,
        showBusData: false,
        notes: ''
      });
    });
  }

  accordionHeader(data: Organisation) {
    const date = data.date === null || data.date === undefined ? '-' : data.date;
    return `${data.organisation} - ${date}`;
  }

  toggleAccordion(data: OrganisationSectionDetails) {
    return data.showBusData = !data.showBusData;
  }

  updateNotes(event, item: OrganisationSectionDetails) {
    item.notes = event.target.value;
  }

  saveNotes() {
    // to do
  }

}


