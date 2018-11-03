import { Component, OnInit } from '@angular/core';
import { AllowContactService } from '../allow-contact.service';

@Component({
  selector: 'app-pre-contact-form',
  templateUrl: './pre-contact-form.component.html',
  styleUrls: ['./pre-contact-form.component.css']
})
export class PreContactFormComponent implements OnInit {
  carlosLanguage = ['pasta', 'darkness'];
  categoryM;
  translated='';

  constructor(
    private allowContactService: AllowContactService
  ) { }

  ngOnInit() {
  }

  allowContact(): void {
    this.allowContactService.allowContact();
  }

  isPresident(): boolean {
    return this.categoryM=='botswana';
  }

  updateTranslation(e): void {
    const res: string[] = [];
    const inputWords: string[] = e.target.value.split(' ');

    for (const word of inputWords) {
      res.push(this.carlosLanguage[Math.floor(
        Math.random()*this.carlosLanguage.length)]);
    }

    this.translated = res.join(' ');
  }

}
