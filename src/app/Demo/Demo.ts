import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {COMPONENTS} from './Components/Components';
import {DemoRoutesModule} from './DemoRoutes';
import {ToolTipModule} from '../ToolTip/ToolTip';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ToolTipModule,
        DemoRoutesModule
    ],
    declarations: [
        COMPONENTS
    ]
})
export class DemoModule {
}
