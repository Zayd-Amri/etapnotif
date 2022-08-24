import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  userIP = ''


  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadIp();
  }

  
  loadIp() {
    this.httpClient.get('https://jsonip.com').subscribe(
      (value:any) => {
        console.log(value);
        this.userIP = value.ip;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
