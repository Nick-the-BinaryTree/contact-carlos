import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AllowContactService } from '../allow-contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  form;
  events = [
    { name: 'The Huns.' },
    { name: 'Elon Musk approached us with an offer to move our country to the moon.' }
  ];

  constructor(
    private allowContactService: AllowContactService,
    private fb: FormBuilder
    ) { 
    this.form = this.fb.group({
      events: this.fb.array(this.events.map(() => this.fb.control(''))),
      message: ['', Validators.required],
      queenStatus: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  showForm() {
    return this.allowContactService.shouldAllowContact();
  }

  onSubmit(form) {
    alert(JSON.stringify(form.getRawValue()));
  }

}
