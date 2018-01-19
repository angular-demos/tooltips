import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutesModule} from './MainRoutes';
import {COMPONENTS} from './Components/Components';

@NgModule({
    imports: [
        CommonModule,
        MainRoutesModule
    ],
    declarations: [
        COMPONENTS
    ]
})
export class MainModule {
}
