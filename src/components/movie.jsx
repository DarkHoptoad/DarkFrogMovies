import React from 'react';

function Movie(props) {

    const {Title: title, 
        Year: year, 
        imdbID: id, 
        Type: type,
         Poster: poster} = props;


    return <div className='card movie'>

                <div class="card-image waves-effect waves-block waves-light">
                    {
                        poster === 'N/A' 
                        
                        ?

                        <img class="activator" src={`https://via.placeholder.com/300x400?text=${title}`}/>

                        :

                        <img class="activator" src={poster}/>
                    }

                    

                </div>

                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{title}</span>
                    <p>{year}
                        <span className='right'>{type}</span>
                    </p>
                </div>

            </div>
}

export { Movie };