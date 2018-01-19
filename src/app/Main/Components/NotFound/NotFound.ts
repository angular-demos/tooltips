import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './NotFound.html',
    styleUrls: ['./NotFound.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
}
