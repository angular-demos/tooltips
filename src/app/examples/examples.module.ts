import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExamplesRoutingModule} from './examples-routing.module';
import {ExamplesComponent} from './examples.component';

@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ],
  declarations: [ExamplesComponent]
})
export class ExamplesModule {
}
