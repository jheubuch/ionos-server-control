import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AppService } from 'src/app/core/app-service/app.service';
import { IonosApiService } from 'src/app/core/ionos-api-service/ionos-api.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss'],
})
export class SetupComponent implements OnInit {
  public ionosApiKeyForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private appService: AppService,
    private ionosApiService: IonosApiService,
    private bottomSheetRef: MatBottomSheetRef
  ) {
    this.ionosApiKeyForm = formBuilder.group({
      ionosApiKey: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public submitApiKeyForm(): void {
    this.ionosApiKeyForm.disable();
    this.appService.setIonosApiKey(
      this.ionosApiKeyForm.get('ionosApiKey')?.value
    );
    this.ionosApiService.checkConnection().subscribe({
      next: () => {
        this.bottomSheetRef.dismiss();
      },
      error: (httpError) => {
        this.appService.removeIonosApiKey();
        this.ionosApiKeyForm.enable();
        if (
          httpError instanceof HttpErrorResponse &&
          httpError.status === 401
        ) {
          this.ionosApiKeyForm
            .get('ionosApiKey')
            ?.setErrors({ apiError: true });
        }
      },
      complete: () => {
        this.ionosApiKeyForm.enable();
      },
    });
  }
}
