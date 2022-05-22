import React from 'react';
import {Movie} from './movie'


function Movies(props) {
    const {movies = []} = props;


    return (
    
    <div className="movies">

        {
            movies.length ? (
                movies.map ((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (
                <h4 className='nf' >Nothing Found</h4>
            )
        }
            
    </div>

    );
}

export { Movies };
