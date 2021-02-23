import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  public ionosApiKeyForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.ionosApiKeyForm = formBuilder.group({
      ionosApiKey: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public submitApiKeyForm(): void { }

}
