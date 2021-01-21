export interface OrganisationDetails {
    organisations?: Organisation[];
    isRetrievingData?: boolean;
    error?: string;
}

export interface Organisation {
    organisation: string;
    date: string;
    busData: BusData[];
}

export interface BusData {
    busId: string;
    routeVariant: string;
    deviationFromTimetable: number;
}
