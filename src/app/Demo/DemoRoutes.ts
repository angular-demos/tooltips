import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewComponent} from './Components/View/View';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/demo/view',
        pathMatch: 'full'
    },
    {
        path: 'view',
        component: ViewComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoRoutesModule {
}
