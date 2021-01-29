import { Component, OnInit } from '@angular/core';
import { Contact } from '../Entities/contact';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  listOfContact: Contact[] | any;
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }
  async getAllContacts() {
    this.listOfContact = await this.contactService.getAllContact().toPromise();

    
  }
}
