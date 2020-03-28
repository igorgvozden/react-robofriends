import React from 'react';
import Card from './Card';

const CardsList = ({robots}) => {
    return (
        robots.map(robo => {
            return (
                <Card key = {robo.id} name = {robo.name} id = {robo.id} email = {robo.email} />
            )
        }) 
           
    );
}


export default CardsList;