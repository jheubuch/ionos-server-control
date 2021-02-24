import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServer } from 'src/app/models/server';

const IONOS_API_BASE_URL: string = 'https://cloudpanel-api.ionos.com/v1';

@Injectable({
  providedIn: 'root',
})
export class IonosApiService {
  constructor(private httpClient: HttpClient) {}

  public checkConnection(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${IONOS_API_BASE_URL}/ping_auth`);
  }

  public getServers(): Observable<IServer[]> {
    return this.httpClient.get<IServer[]>(`${IONOS_API_BASE_URL}/servers`);
  }
}
