import {Directive, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

/**
 * This is the main tool-tip directive that is used to attach tooltips to DOM elements.
 */
@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip'
})
export class ToolTipDirective implements OnInit, OnChanges {
    @Input('tooltip')
    public message: string;

    public ngOnInit(): void {
        console.log('tooltip:init', this.message);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        console.log('tooltip:change', this.message);
    }
}
