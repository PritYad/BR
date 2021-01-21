import { organisationReducer} from './organisations/organisations.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './state';

export const reducers: ActionReducerMap<AppState> = {
    organisationsState: organisationReducer
};
