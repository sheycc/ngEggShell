import { Component } from '@angular/core';
import { TestClass} from "./someClasses/testClass"; //aqui importo mi clase aislada

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstProject';

  constructor() {
    console.log('AppModule constructor');
    //Puedes tirar codigo aqui para ir probando pero no es recomendable

    const myTestClass: TestClass = new TestClass();
    myTestClass.doSomething();
  }
}
