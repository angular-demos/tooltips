import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';
import {ToolTipPlacement} from '../../Types/ToolTipPlacement';

/**
 * This component handles the displaying of a tooltip message near a trigger element.
 */
@Component({
    selector: 'tooltip-message',
    styleUrls: ['./ToolTipMessage.scss'],
    templateUrl: './ToolTipMessage.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolTipMessageComponent implements OnChanges, OnInit {
    /**
     * Where to place the tooltip.
     */
    @Input()
    public placement: ToolTipPlacement;

    /**
     * Controls the top position of the tooltip.
     */
    @HostBinding('style.top.px')
    public top: number;

    /**
     * Controls the left position of the tooltip.
     */
    @HostBinding('style.left.px')
    public left: number;

    /**
     * Constructor
     */
    public constructor(private change: ChangeDetectorRef, private el: ElementRef) {

    }

    @HostBinding('class.arrow-top')
    public get isTop(): boolean {
        return (this.placement && this.placement.position) === 'top';
    }

    @HostBinding('class.arrow-bottom')
    public get isBottom(): boolean {
        return (this.placement && this.placement.position) === 'bottom';
    }

    @HostBinding('class.arrow-left')
    public get isLeft(): boolean {
        return (this.placement && this.placement.position) === 'left';
    }

    @HostBinding('class.arrow-right')
    public get isRight(): boolean {
        return (this.placement && this.placement.position) === 'right';
    }

    /**
     * Update the display after component is ready.
     */
    public ngOnInit(): void {
        this.update();
    }

    /**
     * When the placement changes.
     */
    public ngOnChanges(changes: SimpleChanges): void {
        this.update();
    }

    /**
     * Sets the position of the tooltip.
     */
    public update() {
        const parent = this.placement.rect;
        const rect = this.getMessageRect();
        const arrow = this.getArrowRect();

        switch (this.placement.position) {
            case 'top':
                this.top = parent.top - rect.height - arrow.height * 2;
                this.left = parent.left - (rect.width / 2) + (parent.width / 2);
                break;
            case 'bottom':
                this.top = parent.bottom;
                this.left = parent.left - (rect.width / 2) + (parent.width / 2);
                break;
            case 'left':
                this.top = parent.top + (parent.height / 2) - (rect.height / 2);
                this.left = parent.left - rect.width;
                break;
            case 'right':
                this.top = parent.top + (parent.height / 2) - (rect.height / 2);
                this.left = parent.left + parent.width;
                break;
        }

        this.change.detectChanges();
    }

    /**
     * Gets the size of the tooltip message area.
     */
    private getMessageRect(): ClientRect {
        return this.el.nativeElement.getBoundingClientRect();
    }

    /**
     * Gets the size of the tooltip arrow. As it changes depending upon the screen.
     */
    private getArrowRect(): ClientRect {
        const arrows = this.el.nativeElement.getElementsByClassName('arrow');
        if (arrows.length === 1) {
            return arrows[0].getBoundingClientRect();
        }
        return {bottom: 0, height: 10, left: 0, right: 0, top: 0, width: 10};
    }

}
