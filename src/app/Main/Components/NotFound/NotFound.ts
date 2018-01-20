import {ChangeDetectionStrategy, Component} from '@angular/core';

/**
 * A very simple way of saying a route was not found.
 */
@Component({
    selector: 'app-not-found',
    templateUrl: './NotFound.html',
    styleUrls: ['./NotFound.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
}
