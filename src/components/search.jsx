import React, {useState} from "react";

const Search = (props) => {

  const {
    searchMovies = Function.prototype,
  } = props;
  
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === "Enter") {
        searchMovies(search, type);

    }
  };

  const handleChange = (event) => {
     setType(event.target.dataset.type);
     searchMovies(search, event.target.dataset.type);
    };
 

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />

          <span
            className="btn__search"
            onClick={() => searchMovies(search, type)}
          >
            Search
          </span>
        </div>
        <div className="radio">
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleChange}
              checked={type === 'all'}
            />
            <span className="radio__txt">All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleChange}
              checked={type === 'movie'}

            />
            <span className="radio__txt">Movie Only</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleChange}
              checked={type === 'series'}

            />
            <span className="radio__txt">Series Only</span>
          </label>
        </div>
      </div>
  );
}

export { Search };
