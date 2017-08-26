import { Component, Prop, Element, Listen } from '@stencil/core';
import { IGridCell } from './IGridCelll';

@Component({
  tag: 'mine-sweeper',
  styleUrl: 'mine-sweeper.scss'
})
export class MineSweeper {

    @Element() element: HTMLElement;

    static bombIcon: string = '💣';
    static flagIcon: string = '🚩';

    @Prop() rows: number = 10;

    @Prop() cols: number = 10;

    @Listen('cellClicked')
    cellClickedHandler({ detail: cell }) {
        console.log(cell);
    }

    render() {
        return (
            [<header>
                <h1>MineSweeper</h1>
            </header>,
            <game-grid id="grid"></game-grid>
            ]

        );
    }

    componentDidLoad() {
        this.setup();
    }

    setup() {
        let grid:any = this.element.querySelector('#grid');
        let cells: IGridCell[] = [];
        for(let row = 0; row < this.rows; row++) {
            for(let col = 0; col < this.cols; col++) {
                cells.push({
                    row: 0,
                    col: 0,
                    revealed: false,
                    state: Math.random() > .8 ? MineSweeper.bombIcon : MineSweeper.flagIcon
                })
            }
        }
        grid.setCells(cells);
    }


}
