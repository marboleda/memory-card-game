import React from 'react';
import './GameGrid.css';
import Card from './Card';

const gameGrid = (props) => {

    const { order } = props;

    return (
        <div className='game-grid'>
            {order.map((cardNum) => {
                return (
                    <Card 
                        cardNum={cardNum}
                    />
                )
            })}
        </div>
    )

}

export default gameGrid