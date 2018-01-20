/**
 * Defines an immutable placement of a tooltip.
 */
export class ToolTipPlacement {
    /**
     * Constructor
     */
    public constructor(private _id: number,
                       private _message: string,
                       private _pos: string,
                       private _rect: ClientRect) {
    }

    /**
     * Read-only tooltip ID
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Read-only tooltip placement (top, bottom, left, right)
     */
    public get position(): string {
        return this._pos;
    }

    /**
     * Read-only message.
     */
    public get message(): string {
        return this._message;
    }

    /**
     * Read-only DOM position
     */
    public get rect(): ClientRect {
        return this._rect;
    }

    /**
     * Creates a new placement with a new bounding rect.
     */
    public withRect(rect: ClientRect) {
        return new ToolTipPlacement(this._id, this._message, this._pos, rect);
    }
}
