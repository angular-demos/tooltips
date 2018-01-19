import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MainModule} from './Main/Main';
import {DemoModule} from './Demo/Demo';
import {BodyComponent} from './Main/Components/Body/Body';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolTipModule} from './ToolTip/ToolTip';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DemoModule,
        MainModule,
        ToolTipModule
    ],
    bootstrap: [
        BodyComponent
    ]
})
export class AppModule {
}
