import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ToolTipPlacement} from '../../Types/ToolTipPlacement';

@Component({
    selector: 'tooltips',
    styleUrls: ['./ToolTips.scss'],
    templateUrl: './ToolTips.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolTipsComponent implements OnDestroy {
    /**
     * A list of active tooltip messages.
     */
    public placements: ToolTipPlacement[] = [];

    /**
     * Marker to prevent change detection after being destroyed.
     */
    private distroyed: boolean = false;

    /**
     * Constructor
     */
    public constructor(private change: ChangeDetectorRef) {

    }

    /**
     * Don't update tooltips anymore.
     */
    public ngOnDestroy(): void {
        this.placements = [];
        this.distroyed = true;
    }

    /**
     * Displays a tooltip by adding it to the list of placements.
     */
    public add(message: string, position: string, rect: ClientRect): ToolTipPlacement {
        const placement = new ToolTipPlacement(message, position, rect);
        this.placements.push(placement);
        if (!this.distroyed) {
            this.change.detectChanges();
        }
        return placement;
    }

    /**
     * Removing a placement removes the tooltip from the page.
     */
    public remove(placement: ToolTipPlacement) {
        const indx: number = this.placements.indexOf(placement);
        if (indx !== -1) {
            this.placements.splice(indx, 1);
        }
        if (!this.distroyed) {
            this.change.detectChanges();
        }
    }

    /**
     * Removes all tooltips from the page.
     */
    public removeAll() {
        this.placements = [];
        if (!this.distroyed) {
            this.change.detectChanges();
        }
    }

    /**
     * Updates the placement of a tooltip.
     */
    public update(placement: ToolTipPlacement, rect: ClientRect): ToolTipPlacement {
        if (!this.distroyed) {
            const indx: number = this.placements.indexOf(placement);
            if (indx !== -1) {
                this.placements[indx] = this.placements[indx].withRect(rect);
                this.change.detectChanges();
                return this.placements[indx];
            }
        }
        return null;
    }
}
