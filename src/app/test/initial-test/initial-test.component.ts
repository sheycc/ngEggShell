import { Component } from '@angular/core';

@Component({
  selector: 'app-initial-test',
  templateUrl: './initial-test.component.html',
  styleUrls: ['./initial-test.component.css']
})
export class InitialTestComponent {

  constructor() {
    console.log('InitialTestComponent constructor');
    //Puedes tirar code aqui
    this.doSomething();
  }

  doSomething() {
    console.log('doSomething method');
    //Puedes tirar code aqui
  }
}
