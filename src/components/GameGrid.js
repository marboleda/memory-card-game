import React from 'react';

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