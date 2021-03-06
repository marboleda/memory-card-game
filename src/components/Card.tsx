import React from 'react';
import './Card.css';

import alisa from '../images/alisa.png';
import anna from '../images/anna.png';
import bryan from '../images/bryan.png';
import dragunov from '../images/dragunov.jpg';
import heihachi from '../images/heihachi.jpg';
import jin from '../images/jin.jpg';
import kazuya from '../images/kazuya.jpeg';
import king from '../images/king.png';
import lili from '../images/lili.jpeg';
import miguel from '../images/miguel.jpg';
import paul from '../images/paul.png';
import raven from '../images/raven.jpg';
import hwoarang from '../images/hwoarang.jpg';
import yoshimitsu from '../images/yoshimitsu.png';
import lee from '../images/lee.jpg';

const getImageInfo = (cardNum: number): [string, string] => {
    switch(cardNum) {
        case 0:
            return [jin, 'Jin'];
            break;
        case 1:
            return [kazuya, 'Kazuya'];
            break;
        case 2:
            return [heihachi, 'Heihachi'];
            break;
        case 3:
            return [king, 'King'];
            break;
        case 4:
            return [alisa, 'Alisa'];
            break;
        case 5:
            return [anna, 'Anna'];
            break;
        case 6:
            return [paul, 'Paul'];
            break;
        case 7:
            return [dragunov, 'Dragunov'];
            break;
        case 8:
            return [lili, 'Lili'];
            break;
        case 9:
            return [bryan, 'Bryan'];
            break;
        case 10:
            return [raven, 'Raven'];
            break;
        case 11:
            return [miguel, 'Miguel'];
        case 12:
            return [hwoarang, 'Hwoarang'];
        case 13:
            return [yoshimitsu, 'Yoshimitsu'];
        case 14:
        default:
            return [lee, 'Lee'];
            
    }
}

interface CardProps {
    cardNum: number;
    click: (cardNum: number) => void;
}

const Card: React.FC<CardProps> = ({ cardNum, click }) => {

    const imageInfo: [string, string] = getImageInfo(cardNum);

    return(
        <div className='card' onClick={() => {click(cardNum)}}>
            <img src={imageInfo[0]} alt={imageInfo[1]}/>
            <h2> {imageInfo[1]} </h2>
        </div>
    )
}

export default Card