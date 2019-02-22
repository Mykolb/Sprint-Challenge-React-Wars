import React from 'react';
import "../index.css"

const Character = props => {
    return (
    <div className='container'>
    {props.tv.map(movies => {
        return (
            <div className='person' key={movies.name}>
            <h2>{movies.name}</h2>
            <p><strong>Height:</strong>{movies.height}</p>
            <p><strong>Mass:</strong>{movies.mass}</p>
            <p><strong>Hair Color:</strong>{movies.hair_color}</p>
            <p><strong>Gender:</strong>{movies.gender}</p>
            </div>
        )
    })}

</div>

    );
}

export default Character;