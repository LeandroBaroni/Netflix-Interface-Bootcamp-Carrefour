import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipleTitleModule } from 'src/app/shared/principle-title/principle-title.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';

import { TestCarouselComponent } from './test-carousel.component';

@NgModule({
  declarations: [TestCarouselComponent],
  imports: [
    CommonModule,
    PrincipleTitleModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  exports: [TestCarouselComponent]
})
export class TestCarouselModule { }
