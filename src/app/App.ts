import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MainModule} from './Main/Main';
import {DemoModule} from './Demo/Demo';
import {BodyComponent} from './Main/Components/Body/Body';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DemoModule,
        MainModule
    ],
    bootstrap: [
        BodyComponent
    ]
})
export class AppModule {
}
