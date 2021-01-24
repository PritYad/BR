import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/state';
import { Store } from '@ngrx/store';
import { loadOrganisationAction } from '../state/organisations/organisations.actions';
import { Organisation } from '../models/organisation';

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
    return `${data.organisation} - ${data.date}`;
  }

  toggleAccordion(data: OrganisationSectionDetails) {
    return data.showBusData = !data.showBusData;
  }

  saveRetrieveNotes(item: OrganisationSectionDetails, action?: string) {
    let name = item.organisation.replace(' ', '');
    name = name + 'notes';
    if (action === 'get') {
      const value = sessionStorage.getItem(name);
      return value === undefined || value === null ? '' : value;
    } else {
      sessionStorage.setItem(name, item.notes);
    }
  }
}


