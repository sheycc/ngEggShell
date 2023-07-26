import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialTestComponent } from './initial-test/initial-test.component';



@NgModule({
  declarations: [
    InitialTestComponent
  ],
  exports: [
    InitialTestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
