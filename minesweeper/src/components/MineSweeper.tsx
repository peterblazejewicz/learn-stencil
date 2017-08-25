import { Component } from '@stencil/core';

@Component({
  tag: 'mine-sweeper',
  styleUrl: 'mine-sweeper.scss'
})
export class MineSweeper {

    render() {
        return (
            [<header>
                <h1>MineSweeper</h1>
            </header>,
            <game-grid rows="10" cols="10"></game-grid>
            ]

        );
    }
}
