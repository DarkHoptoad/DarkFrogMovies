import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getById } from "../api";
import { Preloader } from "../components/preloader";

const MoviePage = () => {
  // const {Title, Year, Rated, Released, Runtime, Actors, Plot, Country, Poster, Metascore, BoxOffice} = movie;
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    getById(id).then((data) => setMovie(data));
  }, [id]);

  return (
    <>
      {!id ? <Preloader />
       : 
       <div className="container">
              <button className="btn" onClick={goBack}>
                  Go Back
              </button>
        <div className="movie__page">
            <div className="movie__page__title">
                <h3>{movie.Title}</h3>
              </div>
              <div className="movie__page__img">
                  {
                      movie.Poster === 'N/A' 
                      
                      ?

                      <img className="" src={`https://via.placeholder.com/300x400?text=${movie.Title}`} alt={movie.Title}/>

                      :

                      <img className="" src={movie.Poster} alt={movie.Title}/>
                  }
              </div>
              <div className="movie__page__year__rated">
                  <h5>Country: {movie.Country}</h5>
                  <h5>Metascore: {movie.Metascore}</h5>
                  <h5>Budget: {movie.BoxOffice}</h5>
                  <h5 className="rated">Rated: {movie.Rated}</h5>
                  <span>Released: {movie.Released}</span>
                  <span>Runtime: {movie.Runtime}</span>
              </div>
              <div className="movie__page__actors">Actors: {movie.Actors}</div>
              <div className="movie__page__plot">Plot: {movie.Plot}</div>

          </div>
       </div>}
    </>
  );
};

export { MoviePage };
