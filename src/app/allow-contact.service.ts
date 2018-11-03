import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllowContactService {
  allowingContact: boolean = false;

  constructor() { }

  allowContact(): void {
    this.allowingContact = true;
    console.log("oka!")
  }

  doNotAllowContact(): void {
    this.allowingContact = false;
  }

  shouldAllowContact(): boolean {
    return this.allowingContact;
  }
}
