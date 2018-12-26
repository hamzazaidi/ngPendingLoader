import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'ngPendingLoader';
  message$: Observable<string>;
  users = [
    {
      id: 4,
      first_name: 'Eve',
      last_name: 'Holt',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
      isProcessing: false
    },
    {
      id: 5,
      first_name: 'John',
      last_name: 'Doe',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
      isProcessing: true
    },
    {
      id: 6,
      first_name: 'Tracey',
      last_name: 'Ramos',
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
      isProcessing: false
    }
  ];

  ngOnInit() {
    this.message$ = of('Sending email...');
  }

}

