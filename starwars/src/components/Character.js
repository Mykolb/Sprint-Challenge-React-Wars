import React from 'react';
import "../index.css"

const Character = props => {
    return (
    <div className='container'>
    {props.tv.map(movies => {
        return (
            <div className='chars' key={movies.name}>
            <h2>{movies.name}</h2>
            <p>{movies.species}</p>
            <p>(movies.gender)</p>
            </div>
        )
    })}

</div>

    );
}

export default Character;