import {ChangeDetectionStrategy, Component} from '@angular/core';

/**
 * This component displays the top nav bar.
 */
@Component({
  selector: 'app-main',
  templateUrl: './Main.html',
  styleUrls: ['./Main.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
    /**
     * Handles the collapsing of the navbar on mobile.
     */
    public toggleCollapse: boolean = false;
}
