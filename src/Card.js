import React from 'react';


const Card = ({ name, email, id }) => {
    return (
        <div className = 'tc bg-light-green dib pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${ id }?200x200`} alt='robo pic'/>
            <h2>{ name }</h2>
            <p>{ email }</p>
        </div>
    );
}

export default Card;