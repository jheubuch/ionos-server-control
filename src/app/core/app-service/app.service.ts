import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly LS_API_KEY: string = 'IONOS-API-KEY';

  public ionosApiKey: BehaviorSubject<string | null>;

  constructor() {
    this.ionosApiKey = new BehaviorSubject<string | null>(this.getIonosApiKey());
  }

  private getIonosApiKey(): string | null {
    return localStorage.getItem(this.LS_API_KEY);
  }

  public setIonosApiKey(apiKey: string): void {
    localStorage.setItem(this.LS_API_KEY, apiKey as string);
    this.ionosApiKey.next(apiKey);
  }

  public removeIonosApiKey(): void {
    localStorage.removeItem(this.LS_API_KEY);
    this.ionosApiKey.next(null);
  }
}
