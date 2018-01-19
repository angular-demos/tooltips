import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {COMPONENTS} from './Components/Components';
import {DemoRoutesModule} from './DemoRoutes';

@NgModule({
    imports: [
        CommonModule,
        DemoRoutesModule
    ],
    declarations: [
        COMPONENTS
    ]
})
export class DemoModule {
}
