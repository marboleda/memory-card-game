import React from 'react';
import './GameGrid.css';
import Card from './Card';

const gameGrid = (props) => {

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

export default gameGrid