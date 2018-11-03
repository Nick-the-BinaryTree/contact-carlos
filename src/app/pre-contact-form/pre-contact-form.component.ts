import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-contact-form',
  templateUrl: './pre-contact-form.component.html',
  styleUrls: ['./pre-contact-form.component.css']
})
export class PreContactFormComponent implements OnInit {
  carlosLanguage = ['pasta', 'darkness'];
  translated='';
  reason2;
  showContact = false;

  constructor() { }

  ngOnInit() {
  }

  proceed() {
    this.showContact = true;
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
