import { Action, createReducer, on } from '@ngrx/store';
import { loadOrganisationAction, loadOrganisationSuccessAction, loadOrganisationErrorAction } from './organisations.actions';
import { OrganisationDetails } from 'src/app/models/organisation';

const initialSate: OrganisationDetails = {
    organisations: [],
    isRetrievingData: false
};

const reducer = createReducer(
    initialSate,
    on(loadOrganisationAction, (state) => {
        return {
            ...state,
            isRetrievingData: true
        };
    }),
    on(loadOrganisationSuccessAction, (state, action) => {
        return {
            ...state,
            isRetrievingData: action.isRetrievingData,
            organisations: action.organisations
        };
    }),
    on(loadOrganisationErrorAction, (state, action) => {
        return {
            ...state,
            isRetrievingData: action.isRetrievingData,
            error: action.error
        };
    })
);

export function organisationReducer(state: OrganisationDetails = initialSate, action: Action) {
    return reducer(state, action);
}
