import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

/**
 * Describes a single button on the demo page.
 */
interface DemoButton {
    id: number;
    name: string;
    tooltip: string;
    position: string;
}

/**
 * Displays the demo for route for tooltips.
 */
@Component({
    selector: 'demo-view',
    styleUrls: ['./View.scss'],
    templateUrl: './View.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComponent implements OnInit, OnChanges {
    /**
     * Number of buttons to show.
     */
    @Input()
    public count: number = 1;

    /**
     * The width for page content.
     */
    public container: string = 'fixed';

    /**
     * The alignment for buttons.
     */
    public alignment: string = 'left';

    /**
     * A list of buttons with tooltips.
     */
    public tips: DemoButton[] = [];

    /**
     * Constructor
     */
    public constructor(private change: ChangeDetectorRef) {

    }

    /**
     * After the component is ready.
     */
    public ngOnInit(): void {
        this.update();
    }

    /**
     * The button count was changed.
     */
    public ngOnChanges(changes: SimpleChanges): void {
        this.update();
    }

    /**
     * Updates the number of buttons.
     */
    public setCount(value: number) {
        this.count = value;
        this.update();
    }

    /**
     * Updates the list of buttons.
     */
    public update() {
        this.tips = [];
        let char = 'A';
        for (let i = 0; i < this.count; i++) {
            this.tips.push({
                id: i,
                name: 'Button ' + char,
                tooltip: 'Hello World',
                position: 'top'
            });
            char = String.fromCharCode(char.charCodeAt(0) + 1);
        }
        this.change.detectChanges();
    }
}
