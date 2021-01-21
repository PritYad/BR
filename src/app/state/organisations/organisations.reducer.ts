import { Action, createReducer, on } from '@ngrx/store';
import { loadBusesDetailsAction, loadOrganisationAction } from './organisations.actions';
import { BusOrganisation } from 'src/app/models/organisation';

const initialSate: BusOrganisation = {
    organisation: '',
    date : '',
    busData: []
};

const reducer = createReducer(
    initialSate,
    on(loadOrganisationAction, (state, action) => {
        return {
            ...state,
            isRetrievingData: true
        };
    })
    // on(loadBusesDetailsAction, (state, action) => {
    //     return {
    //         ...state,
    //         isRetrievingData: action.isRetrievingData,

    //     }
    // })
);

export function organisationReducer(state: BusOrganisation, action: Action) {
    return reducer(state, action);
}
