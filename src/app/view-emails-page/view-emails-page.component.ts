import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

import { Router } from '@angular/router';
import { Emails } from '../interfaces/emails.interface';

@Component({
  selector: 'app-view-emails-page',
  templateUrl: './view-emails-page.component.html',
  styleUrls: ['./view-emails-page.component.css']
})
export class ViewEmailsPageComponent implements OnInit {
  public emails: Emails [] = []

  constructor(private readonly rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.rest.getUserEmails().then(res => {
      this.emails = res.data
      console.log(res)
    });
  }
}
