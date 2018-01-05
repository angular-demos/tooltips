import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MainModule} from './main/main.module';
import {MainComponent} from './main/main.component';
import {ButtonsModule} from './buttons/buttons.module';

@NgModule({
  imports: [
    BrowserModule,
    MainModule,
    ButtonsModule
  ],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule {
}
