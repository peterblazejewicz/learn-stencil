import { Component, Event, EventEmitter, Prop, Listen } from "@stencil/core";
import { IGridCell } from './IGridCelll';

@Component({
  tag: 'grid-cell',
  styleUrl: 'grid-cell.scss'
})
export class GridCell {

    @Event() cellClicked: EventEmitter;

    @Prop() cell: IGridCell;

    @Listen('click')
    clickHandler(_event:Event) {
        this.cellClicked.emit(this.cell);
    }

    render() {
        return (
            <span>
                {this.cell.state}
            </span>
        );
    }
}
