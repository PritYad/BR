import { Component, OnInit } from '@angular/core';
import { AppState, OrganisationsState } from '../state/state';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { loadOrganisationAction } from '../state/organisations/organisations.actions';
import { OrganisationDetails, Organisation } from '../models/organisation';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
})
export class OrganisationsComponent implements OnInit {
  organisationsState: OrganisationsState;
  organisationsList: Organisation[];
  formGroup: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe().subscribe(state => {
      const response = state.organisationsState.organisations;
      this.organisationsList = response.data;
    });
    this.store.dispatch(loadOrganisationAction());
    this.initFormGroup();
  }

  initFormGroup() {
      this.formGroup = new FormGroup({

      });
  }

}
