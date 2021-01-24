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
        notes: this.saveRetrieveNotes(ele, 'get')
      });
    });
  }

  accordionHeader(data: Organisation) {
    const date = data.date === null || data.date === undefined ? '-' : data.date;
    return `${data.organisation} - ${date}`;
  }

  toggleAccordion(data: OrganisationSectionDetails) {
    const flag = data.showBusData = !data.showBusData;
    this.updateNotes(data, data.notes);
    return flag;
  }

  updateNotes(item: OrganisationSectionDetails, value: string) {
    item.notes = value;
  }

  saveRetrieveNotes(item: OrganisationSectionDetails, action?: string) {
    let name = item.organisation.replace(' ', '');
    name = name + 'notes';
    if (action === 'get') {
      const value = sessionStorage.getItem(name);
      console.log(value);
      return value === undefined || value === null ? '' : value;
    } else {
      sessionStorage.setItem(name, item.notes);
    }
  }
}


