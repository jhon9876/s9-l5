import { Component } from "react";
import { Button, ListGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
class Mynav extends Component {
  render() {
    return (
      <Navbar
        className="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
        style={{ backgroundColor: "#221f1f !important" }}
      >
        <div className="container-fluid">
          <Navbar.Brand className="navbar-brand" href="#">
            <img src={logo} style={{ width: "100px", height: "55px" }} />
          </Navbar.Brand>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse id="basic-navbar-nav">
            <ListGroup
              variant="flush"
              className="navbar-nav me-auto mb-2 mb-lg-0"
            >
              <ListGroup.Item className="nav-item">
                <Nav.Link className="nav-link active fw-bold" href="#">
                  Home
                </Nav.Link>
              </ListGroup.Item>
              <ListGroup.Item className="nav-item">
                <Nav.Link className="nav-link fw-bold" href="#">
                  TV Shows
                </Nav.Link>
              </ListGroup.Item>
              <ListGroup.Item className="nav-item">
                <Nav.Link className="nav-link fw-bold" href="#">
                  Movies
                </Nav.Link>
              </ListGroup.Item>
              <ListGroup.Item className="nav-item">
                <Nav.Link className="nav-link fw-bold" href="#">
                  Recently Added
                </Nav.Link>
              </ListGroup.Item>
              <ListGroup.Item className="nav-item">
                <Nav.Link className="nav-link fw-bold" href="#">
                  My List
                </Nav.Link>
              </ListGroup.Item>
            </ListGroup>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons"></i>
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <i className="bi bi-bell icons"></i>
              <i className="bi bi-person-circle icons"></i>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Mynav;
