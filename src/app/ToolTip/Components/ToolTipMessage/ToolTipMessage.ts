import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnChanges, OnInit,
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
        const rect = this.el.nativeElement.getBoundingClientRect();
        this.top = parent.top - rect.height;
        this.left = parent.left;
        this.change.detectChanges();
    }
}
