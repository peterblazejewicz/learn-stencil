import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'grid-cell',
  styleUrl: 'grid-cell.scss'
})
export class GridCell {

    @Prop() row: number;

    @Prop() col: number;

    render() {
        return (
            <span>{this.row}:{this.col}</span>
        );
    }
}
