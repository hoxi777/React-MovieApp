import React, { component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import LinesEllipsis from 'react-lines-ellipsis'


function Movie({ title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>   
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
}

function MoviePoster({ poster, alt}) {
    return (
        <img src={poster} alt={alt} className="Movie_Poster"  />
    )
}

function MovieGenre({genres}) {
    return (
        <span className="Movie_Genre">{genres}</span>
    )

}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genres: PropTypes.array.isRequired
}

export default Movie;