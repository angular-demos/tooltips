import {Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Optional} from '@angular/core';
import {ToolTipsComponent} from '../../Components/ToolTips/ToolTips';
import {ToolTipPlacement} from '../../Types/ToolTipPlacement';

/**
 * This is the main tool-tip directive that is used to attach tooltips to DOM elements.
 */
@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip'
})
export class ToolTipDirective implements OnInit, OnDestroy {
    /**
     * The message to display.
     */
    @Input('tooltip')
    public message: string;

    /**
     * Where to position the tooltip (top, bottom, left, right)
     */
    @Input('tooltip-pos')
    public position: string;

    /**
     * Handle of the active tooltip.
     */
    private placement: ToolTipPlacement = null;

    /**
     * Constructor
     */
    public constructor(@Optional() private tooltips: ToolTipsComponent, private el: ElementRef) {
        if (!this.tooltips) {
            throw new Error('Tooltip requires a wrapping parent of type tooltips.');
        }
    }

    /**
     * Updates the tooltip placement when the window is resized.
     */
    @HostListener('window:resize', ['$event'])
    public onWindowResize(event) {
        if (this.placement) {
            this.placement = this.tooltips.update(this.placement, this.el.nativeElement.getBoundingClientRect());
        }
    }

    /**
     * Debug
     */
    public ngOnInit(): void {
        window.setTimeout(() => {
            this.show();
        });
    }

    /**
     * Remove any open tooltips.
     */
    public ngOnDestroy(): void {
        this.close();
    }

    /**
     * Displays the tooltip placement.
     */
    public show() {
        this.close();

        if (this.message) {
            this.placement = this.tooltips.add(
                this.message,
                this.position || 'top',
                this.el.nativeElement.getBoundingClientRect()
            );
        }
    }

    /**
     * Removes a tooltip placement.
     */
    public close() {
        if (this.placement) {
            this.tooltips.remove(this.placement);
        }

        this.placement = null;
    }
}
