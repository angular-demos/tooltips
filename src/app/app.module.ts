import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MainModule} from './main/main.module';
import {MainComponent} from './main/main.component';
import {OverviewModule} from './overview/overview.module';
import {ExamplesModule} from './examples/examples.module';

@NgModule({
  imports: [
    BrowserModule,
    ExamplesModule,
    MainModule,
    OverviewModule
  ],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule {
}
