import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DIRECTIVES} from './Directives/Dirctives';
import {COMPONENTS} from './Components/Components';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        COMPONENTS,
        DIRECTIVES
    ],
    exports: [
        COMPONENTS,
        DIRECTIVES
    ]
})
export class ToolTipModule {
}
