import { createAction, props } from '@ngrx/store';
import { BusOrganisation, BusData } from '../../models/organisation';

export const loadOrganisationAction = createAction (
    '[BusOrganisation] Load organisation details',
    props<{
        organisations: BusOrganisation[];
    }>()
);

export const loadBusesDetailsAction = createAction (
    '[BusOrganisation] Load Buses details',
    props<{
        busData: BusData[];
    }>()
);
