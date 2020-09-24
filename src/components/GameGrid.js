import React from 'react';
import './GameGrid.css';
import Card from './Card';

const gameGrid = (props) => {

    const { order, shuffle } = props;

    return (
        <div className='game-grid'>
            {order.map((cardNum) => {
                return (
                    <Card 
                        cardNum={cardNum}
                        shuffle={shuffle}
                    />
                )
            })}
        </div>
    )

}

export default gameGrid