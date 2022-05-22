import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
        this.props.searchMovies(this.state.search, this.state.type);

    }
  };

  handleChange = (event) => {
    this.setState(() => ({ type: event.target.dataset.type }), () => {
        this.props.searchMovies(this.state.search, this.state.type);
    });
 };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            className="validate"
            placeholder="Search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />

          <button
            className="btn btn__search"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
          >
            Search
          </button>
        </div>
        <div className="radio">
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleChange}
              checked={this.state.type === 'all'}
            />
            <span className="radio__txt">All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleChange}
              checked={this.state.type === 'movie'}

            />
            <span className="radio__txt">Movie Only</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleChange}
              checked={this.state.type === 'series'}

            />
            <span className="radio__txt">Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
