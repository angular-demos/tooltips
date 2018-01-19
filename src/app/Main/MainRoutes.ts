import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './Components/Main/Main';
import {NotFoundComponent} from './Components/NotFound/NotFound';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/demo',
        pathMatch: 'full'
    }, {
        path: '',
        component: MainComponent,
        children: [
            {path: 'demo', loadChildren: 'app/Demo/Demo#DemoModule'},
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutesModule {
}
