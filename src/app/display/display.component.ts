import { Component, OnInit } from '@angular/core';
import { Emails } from '../interfaces/emails.interface';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  public emails: Emails[] = []
  public singleMessage: any;
  public deleteEmail: any;

  constructor(private readonly rest: RestService) { }

  ngOnInit(): void {
  } 
}
