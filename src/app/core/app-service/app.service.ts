import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly LS_API_KEY: string = "IONOS-API-KEY";

  constructor() { }

  public getIonosApiKey(): string | null {
    return localStorage.getItem(this.LS_API_KEY);
  }
}
