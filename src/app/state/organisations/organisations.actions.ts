import { createAction, props } from '@ngrx/store';
import { Organisation } from '../../models/organisation';

export const loadOrganisationAction = createAction (
    '[Organisation] Load organisations'
);

export const loadOrganisationSuccessAction = createAction (
    '[Organisation] Load organisations Success',
    props<{
        organisations: Organisation[];
        isRetrievingData: boolean;
    }>()
);

export const loadOrganisationErrorAction = createAction (
    '[Organisation] Load organisations Error',
    props<{
        error: string;
        isRetrievingData: boolean;
    }>()
);
