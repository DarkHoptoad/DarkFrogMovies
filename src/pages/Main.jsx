import React, {useState, useEffect} from "react";
import { Movies } from "../components/movies";
import { Preloader } from "../components/preloader";
import { Search } from "../components/search";
import {getMainMenu, getSearch} from '../api'

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect (() => {
    getMainMenu().then((data) => 
            setMovies(data.Search),
            setLoading(false)
        )
        .catch((err) => {
          console.error(err);
          setLoading(false)
  
        })
  }, [])
  // componentDidMount() {

  //   fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
  //     .then((response) => response.json())
  //     .then((data) => 
  //         this.setState({ movies: data.Search, loading: false })
  //     )
  //     .catch((err) => {
  //       console.error(err);
  //       this.setState({loading: false })

  //     })
      
  // }

  const searchMovies = (str, type) => {
    setLoading(true);

    getSearch(str, type).then((data) => 
        setMovies(data.Search),
        setLoading(false)
      )
      .catch((err) => {
        console.error(err);
        setLoading(false )

      })
  };

    return (
      <main className="container content">
        <Search searchMovies={searchMovies} />

        {loading ? (
        <Preloader />

        ) : (

        <Movies movies={movies} />
        
        )}

      </main>
    );
}

export { Main};
