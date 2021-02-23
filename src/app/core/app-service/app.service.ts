import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly LS_API_KEY: string = 'IONOS-API-KEY';

  constructor() {}

  public getIonosApiKey(): string | null {
    return localStorage.getItem(this.LS_API_KEY);
  }

  public setIonosApiKey(apiKey: string): void {
    localStorage.setItem(this.LS_API_KEY, apiKey as string);
  }

  public removeIonosApiKey(): void {
    localStorage.removeItem(this.LS_API_KEY);
  }
}
