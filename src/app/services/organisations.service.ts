import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {

  private mockDataUrl = '../../assets/mockData/bus-services-data.json';

  constructor(private http: HttpClient) { }

  getOrganisationsData() {
    // mock response for fetching bus organisations data
    return this.http.get(this.mockDataUrl);
  }
}
