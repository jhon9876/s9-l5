import { Component } from "react";
import { Col, Image } from "react-bootstrap";

class AvengersFilm extends Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=390b52fd&s=avengers")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((dati) => {
        console.log(dati);
        this.setState({ isLoading: false, movies: dati.Search });
      })
      .catch((err) => {
        console.log("Errore: ", err);
      });
  }
  render() {
    return (
      <>
        {this.state.movies.map((film) => {
          return (
            <Col className="mb-2 text-center px-1">
              <Image fluid src={film.Poster} alt="movie picture" />
            </Col>
          );
        })}
      </>
    );
  }
}

export default AvengersFilm;
