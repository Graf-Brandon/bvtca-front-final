import { Component, OnInit } from '@angular/core';
import { JwtService } from './jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public readonly jwtService: JwtService) {    
  }

  ngOnInit () {

  } 
}
