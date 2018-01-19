import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutesModule} from './MainRoutes';
import {COMPONENTS} from './Components/Components';
import {ToolTipModule} from '../ToolTip/ToolTip';

@NgModule({
    imports: [
        CommonModule,
        ToolTipModule,
        MainRoutesModule
    ],
    declarations: [
        COMPONENTS
    ]
})
export class MainModule {
}
