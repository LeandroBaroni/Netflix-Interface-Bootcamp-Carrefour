import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestIntervalComponent } from './test-interval.component';



@NgModule({
  declarations: [TestIntervalComponent],
  imports: [
    CommonModule
  ],
  exports: [TestIntervalComponent]
})
export class TestIntervalModule { }
