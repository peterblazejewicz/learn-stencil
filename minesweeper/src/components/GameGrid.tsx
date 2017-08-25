import { Component, Prop, PropDidChange, PropWillChange } from "@stencil/core";

@Component({
  tag: 'game-grid',
  styleUrl: 'game-grid.scss'
})
export class GameGrid {

    @Prop() rows: number;

    @Prop() cols: number;

    render() {
        const cells = [];
        for(let row = 0; row < this.rows; row++) {
            for(let col = 0; col < this.cols; col++) {
                cells.push(<grid-cell row={row} col={col}></grid-cell>)
            }
        }
        return (cells)
    }

}
