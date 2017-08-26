import { Component, Prop, Element, State, Method } from '@stencil/core';
import { IGridCell } from './IGridCelll';

@Component({
  tag: 'game-grid',
  styleUrl: 'game-grid.scss'
})
export class GameGrid {

    @Element() element: HTMLElement;

    @State() cells: IGridCell[] = [];

    @Prop() rows: number;

    @Prop() cols: number;

    @Method()
    setCells(cells:IGridCell[]){
        this.cells = cells;
    }

    render() {
        return (
            this.cells.map(cell => <grid-cell cell={cell}></grid-cell>)
        )
    }

}
