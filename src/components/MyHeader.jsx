import { Component } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import MyImg1 from "../assets/1.png";
import MyImg2 from "../assets/2.png";
import MyImg3 from "../assets/3.png";
import MyImg4 from "../assets/4.png";
import MyImg5 from "../assets/5.png";
import MyImg6 from "../assets/6.png";
import MyImg7 from "../assets/7.png";
import MyImg8 from "../assets/8.png";
import MyImg9 from "../assets/9.png";
import MyImg10 from "../assets/10.png";
import MyImg11 from "../assets/11.png";
import MyImg12 from "../assets/12.png";
import MyImg13 from "../assets/13.png";
import MyImg14 from "../assets/14.png";
import MyImg15 from "../assets/15.png";
import MyImg16 from "../assets/16.png";
import MyImg17 from "../assets/17.png";
import MyImg18 from "../assets/18.png";
import MyFooter from "./MyFooter";
import HarryPotterFilm from "./HarryPotterFilm";
import AvengersFilm from "./AvengersFilm";

class MyHeader extends Component {
  render() {
    return (
      <Container className="px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <ButtonGroup role="group">
              <Dropdown className="ms-4 mt-1">
                <Dropdown.Toggle
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#221f1f" }}
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#">Drama</Dropdown.Item>
                  <Dropdown.Item href="#">Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ButtonGroup>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg1} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg2} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg3} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg4} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg5} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg6} alt="movie picture" />
          </Col>
        </Row>
        <h4>Watch it Again</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg7} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg8} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg9} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg10} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg11} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg12} alt="movie picture" />
          </Col>
        </Row>
        <h4>New Releases</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg13} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg14} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg15} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg16} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg17} alt="movie picture" />
          </Col>
          <Col className="mb-2 text-center px-1">
            <Image fluid src={MyImg18} alt="movie picture" />
          </Col>
        </Row>
        <h4>Harry Potter</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <HarryPotterFilm />
        </Row>
        <h4>Avengers</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          <AvengersFilm />
        </Row>

        <MyFooter />
      </Container>
    );
  }
}
export default MyHeader;
