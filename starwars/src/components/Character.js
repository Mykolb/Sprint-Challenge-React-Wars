import React from 'react';
import "../index.css"

const Character = props => {
    return (
    <div className='container'>
    {props.tv.map(movies => {
        return (
            <div className='person' key={movies.name}>
            <h2>{movies.name}</h2>
            <p>Height: {movies.height}</p>
            <p>Gender: {movies.gender}</p>
            </div>
        )
    })}

</div>

    );
}

export default Character;