import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/state';
import { Store } from '@ngrx/store';
import { loadOrganisationAction } from '../state/organisations/organisations.actions';
import { Organisation, BusData } from '../models/organisation';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

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
  formArray: FormArray;

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.store.pipe().subscribe(state => {
      const data = state.organisationsState.organisations;
      if (data.length > 0 && !state.organisationsState.isRetrievingData) {
        this.formArray = new FormArray(this.fetchOrganisationDetails(data));
      }
    });
    this.store.dispatch(loadOrganisationAction());
  }

  fetchOrganisationDetails(data: Organisation[]) {
    const list = [];
    data.forEach(ele => {
      list.push(this.createOrganisationFromGroup(ele));
    });
    return list;
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
      return value === undefined || value === null ? '' : value;
    } else {
      sessionStorage.setItem(name, item.notes);
    }
  }

  createOrganisationFromGroup(item?: OrganisationSectionDetails): FormGroup {
    return this.fb.group({
      organisation: [item.organisation],
      notes: [this.saveRetrieveNotes(item, 'get'), Validators.maxLength(5000)],
      date: [item.date],
      busData: [item.busData],
      showBusData: [false]
    });
  }
}


