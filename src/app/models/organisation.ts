export interface BusOrganisation {
    organisation: string;
    date: string;
    busData: BusData[];
}

export interface BusData {
    busId: string;
    routeVariant: string;
    deviationFromTimetable: number;
}
