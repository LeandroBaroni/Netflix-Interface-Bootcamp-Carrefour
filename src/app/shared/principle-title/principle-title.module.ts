import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipleTitleComponent } from 'src/app/shared/principle-title/principle-title.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PrincipleTitleComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PrincipleTitleComponent]
})
export class PrincipleTitleModule { }
