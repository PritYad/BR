export interface OrganisationDetails {
    data?: Organisation[];
    isRetrievingData?: boolean;
    error?: string;
    organisations?: Organisation[];
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
