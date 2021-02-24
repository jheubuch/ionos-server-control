import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SetupComponent } from './components/setup/setup.component';
import { AppService } from './core/app-service/app.service';
import { IonosApiService } from './core/ionos-api-service/ionos-api.service';
import { IServer } from './models/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'IONOS Server Control';
  ionosApiKey: string | null = null;
  servers: IServer[] = [];

  constructor(
    private appService: AppService,
    private bottomSheet: MatBottomSheet,
    private ionosApiService: IonosApiService
  ) {
    this.appService.ionosApiKey.subscribe((key) => {
      this.ionosApiKey = key;
      if (key) {
        this.ionosApiService.getServers().subscribe({
          next: (servers) => {
            this.servers = servers;
          },
          error: (httpError) => {
            console.error(httpError);
            this.appService.removeIonosApiKey();
          },
        });
      }
    });
    if (this.ionosApiKey === null) {
      this.openSetupBottomSheet();
    }
  }

  public openSetupBottomSheet(): void {
    this.bottomSheet.open(SetupComponent);
  }
}
