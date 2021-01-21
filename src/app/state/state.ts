import { BusData } from '../models/organisation';

export interface OrganisationsState {
    organisation: string;
    date: string;
    busData: BusData[];
}

export interface AppState {
    organisationsState: OrganisationsState;
}
