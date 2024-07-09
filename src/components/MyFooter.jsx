import { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <footer>
        <Row className="justify-content-center mt-5">
          <Col className="col-6">
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href="#" alt="footer link">
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href="#" alt="footer link">
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button
                  type="button"
                  className="btn btn-sm footer-button rounded-0 mt-3"
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default MyFooter;
