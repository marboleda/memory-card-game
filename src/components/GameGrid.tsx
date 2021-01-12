import React from 'react';
import './GameGrid.css';
import Card from './Card';

interface GameGridProps {
    order: number[];
    click: (cardNum: number) => void;
}

const GameGrid: React.FC<GameGridProps> = (props) => {

    const { order, click } = props;

    return (
        <div className='game-grid'>
            {order.map((cardNum) => {
                return (
                    <Card 
                        cardNum={cardNum}
                        click={click}
                    />
                )
            })}
        </div>
    )

}

export default GameGrid