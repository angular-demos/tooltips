import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DIRECTIVES} from './Directives/Dirctives';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DIRECTIVES
    ],
    exports: [
        DIRECTIVES
    ]
})
export class ToolTipModule {
}
