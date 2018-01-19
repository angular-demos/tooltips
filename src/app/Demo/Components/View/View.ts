import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'demo-view',
    styleUrls: ['./View.scss'],
    templateUrl: './View.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent {

}
