import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipleTitleModule } from 'src/app/shared/principle-title/principle-title.module';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PrincipleTitleModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
