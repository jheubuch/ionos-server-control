import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SetupComponent } from './components/setup/setup.component';
import { AppService } from './core/app-service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'IONOS Server Control';

  constructor(
    private appService: AppService,
    private bottomSheet: MatBottomSheet
  ) {
    let apiKey = this.appService.getIonosApiKey();
    if (apiKey === null) {
      this.openSetupBottomSheet();
    }
  }

  private openSetupBottomSheet(): void {
    let bottomSheetRef = this.bottomSheet.open(SetupComponent);
    bottomSheetRef.afterDismissed().subscribe(() => {
      // Do sth when setup finished
    });
  }
}
