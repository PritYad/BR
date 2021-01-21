import { OrganisationDetails, Organisation } from '../models/organisation';

export interface OrganisationsState {
    organisations?: Organisation[];
}
export interface AppState {
    organisationsState: OrganisationsState;
}
