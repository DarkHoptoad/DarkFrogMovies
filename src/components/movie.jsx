import React from 'react';
import {Link} from 'react-router-dom'

function Movie(props) {

    const {Title: title, 
        Year: year, 
        imdbID: id, 
        Type: type,
         Poster: poster} = props;


    return <div className='card movie' id={id}>

                <div className="card-image waves-effect waves-block waves-light">
                    {
                        poster === 'N/A' 
                        
                        ?

                        <img className="activator" src={`https://via.placeholder.com/300x400?text=${title}`} alt={title}/>

                        :

                        <img className="activator" src={poster} alt={title}/>
                    }

                    

                </div>

                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>{year}
                        <span className='right'>{type}</span>
                    </p>
                </div>
                <Link className="link" to={`/${id}`}>See more</Link>

            </div>
}

export { Movie };