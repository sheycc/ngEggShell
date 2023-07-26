import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TestModule} from "./test/test.module";
import {InitialTestComponent} from "./test/initial-test/initial-test.component";

@NgModule({
  declarations: [
    AppComponent,
    InitialTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
