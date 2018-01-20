import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

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
export class ViewComponent implements OnInit {
    /**
     * Number of buttons to show.
     */
    public count: number;

    /**
     * The width for page content.
     */
    public container: string = 'fluid';

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
        this.tips = [
            {
                id: 0,
                name: 'Button A',
                tooltip: 'Hello World',
                position: 'top'
            }, {
                id: 1,
                name: 'Button B',
                tooltip: 'Hello World',
                position: 'top'
            }
        ];
        this.count = this.tips.length;
    }

    /**
     * Updates the number of buttons.
     */
    public setCount(value: number) {
        if (this.count < value) {
            let char = String.fromCharCode('A'.charCodeAt(0) + this.count);
            for (let i = this.count; i < value; i++) {
                this.tips.push({
                    id: i,
                    name: 'Button ' + char,
                    tooltip: 'Hello World',
                    position: 'top'
                });
                char = String.fromCharCode(char.charCodeAt(0) + 1);
            }
        } else {
            this.tips = this.tips.slice(0, value);
        }

        this.count = this.tips.length;
        this.change.detectChanges();
    }
}
