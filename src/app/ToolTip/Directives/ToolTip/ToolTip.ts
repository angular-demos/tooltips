import {Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, Optional, Renderer2, SimpleChanges} from '@angular/core';
import {ToolTipsComponent} from '../../Components/ToolTips/ToolTips';
import {ToolTipPlacement} from '../../Types/ToolTipPlacement';

/**
 * This is the main tool-tip directive that is used to attach tooltips to DOM elements.
 */
@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip'
})
export class ToolTipDirective implements OnDestroy, OnChanges {
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
    public constructor(@Optional() private tooltips: ToolTipsComponent,
                       private el: ElementRef,
                       private render: Renderer2) {
        if (!this.tooltips) {
            throw new Error('Tooltip requires a wrapping parent of type tooltips.');
        }
    }

    /**
     * Updates the tooltip placement when the window is resized.
     */
    @HostListener('window:resize')
    public onWindowResize() {
        if (this.placement) {
            this.placement = this.tooltips.update(this.placement, this.el.nativeElement.getBoundingClientRect());
        }
    }

    /**
     * Updates the tooltip placement when the window is scrolled.
     */
    @HostListener('window:scroll')
    public onWindowScroll() {
        if (this.placement) {
            this.placement = this.tooltips.update(this.placement, this.el.nativeElement.getBoundingClientRect());
        }
    }

    /**
     * Shows the tooltip when clicked (optional).
     */
    @HostListener('click', ['$event'])
    public onClick(event: Event) {
        if (!this.placement) {
            this.show();
        }
    }

    /**
     * Closes the tooltip when clicked outside.
     */
    @HostListener('document:click', ['$event'])
    public onDocumentClick(event: Event) {
        if (event.target !== this.el.nativeElement) {
            this.close();
        }
    }

    /**
     * Closes the tooltip when ESC is pressed.
     */
    @HostListener('document:keyup', ['$event'])
    public onDocumentKeyUp(event: KeyboardEvent) {
        if (event.keyCode === 27) {
            this.close();
        }
    }

    /**
     * Remove any open tooltips.
     */
    public ngOnDestroy(): void {
        this.close();
    }

    /**
     * Handles changes on tooltip inputs.
     */
    public ngOnChanges(changes: SimpleChanges): void {
        if (this.placement) {
            this.close();
            this.show();
        }
    }

    /**
     * Displays the tooltip placement.
     */
    public show() {
        this.tooltips.removeAll();
        this.placement = null;

        if (this.message) {
            this.placement = this.tooltips.add(
                this.message,
                this.position || 'top',
                this.el.nativeElement.getBoundingClientRect()
            );

            // for accessibility the tooltip is linked to the parent DOM element
            this.render.setAttribute(this.el.nativeElement, 'aria-describedby', 'tooltip' + this.placement.id);
        }
    }

    /**
     * Removes a tooltip placement.
     */
    public close() {
        if (this.placement) {
            this.tooltips.remove(this.placement);
        }
        this.render.removeAttribute(this.el.nativeElement, 'aria-describedby');
        this.placement = null;
    }
}
