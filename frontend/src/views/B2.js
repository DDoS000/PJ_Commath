import React from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { getElimination } from "../functions/function";

class B2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a00: '6',
      a01: '-4',
      a02: '1',
      a10: '-4',
      a11: '6',
      a12: '-4',
      a20: '1',
      a21: '-4',
      a22: '6',
      b1: '-14',
      b2: '36',
      b3: '6',
      x0: 'รอคําตอบ',
      x1: 'รอคําตอบ',
      x2: 'รอคําตอบ',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const data = {
      A: [[this.state.a00, this.state.a01, this.state.a02], [this.state.a10, this.state.a11, this.state.a12], [this.state.a20, this.state.a21, this.state.a22]],
      b: [this.state.b1, this.state.b2, this.state.b3]
    };
    getElimination(data).then((res) => {
      this.setState({ x0: res[0] });
      this.setState({ x1: res[1] });
      this.setState({ x2: res[2] });
    });
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card id="card">
                <CardBody id="cardbody">
                <h3> Elimination </h3>
                  <h5>► ตัวอย่าง Code</h5>
                  <img
                    alt="..."
                    src={require("assets/img/B2.png")}
                  />
                  <br></br>
                  <br></br>
                  <h5>► ตัวอย่าง input</h5>
                  <p>Matrix A: [ [ 6 -4 1 ] [ -4 6 -4 ] [ 1 -4 6 ] ]</p>
                  <p>Matrix B: [-14 36 6 ]</p>
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Card id="card">
                <CardBody id="cardbody">
                  <h3>Linear Equations</h3>
                  <form onSubmit={this.handleSubmit}>
                    <Row>
                      <div className="text-center">
                        <h3>Matrix A</h3>
                        <Row>
                          <Col>
                            <Input
                              style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="a00"
                              value={this.state.a00} onChange={this.handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{
                                marginLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="a01"
                              value={this.state.a01} onChange={this.handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{
                                marginLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="a02"
                              value={this.state.a02} onChange={this.handleInputChange}
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <Input
                              style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="a10"
                              value={this.state.a10} onChange={this.handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{
                                marginLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="a11"
                              value={this.state.a11} onChange={this.handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{
                                marginLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="a12"
                              value={this.state.a12} onChange={this.handleInputChange}
                            />
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <Input
                              style={{
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="a20"
                              value={this.state.a20} onChange={this.handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{
                                marginLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="a21"
                              value={this.state.a21} onChange={this.handleInputChange}
                            />
                          </Col>
                          <Col>
                            <Input
                              style={{
                                marginLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="a22"
                              value={this.state.a22} onChange={this.handleInputChange}
                            />
                          </Col>
                        </Row>
                      </div>

                      <div className="text-center" style={{ marginLeft: "100px" }}>
                        <h3>Matrix B</h3>
                        <Row>
                          <Col>
                            <Input
                              style={{
                                marginLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="b1"
                              value={this.state.b1} onChange={this.handleInputChange}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              style={{
                                marginLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="b2"
                              value={this.state.b2} onChange={this.handleInputChange}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Input
                              style={{
                                marginLeft: "20px",
                                marginTop: "20px",
                                marginBottom: "20px",
                                width: 60,
                              }}
                              type="text"
                              name="b3"
                              value={this.state.b3} onChange={this.handleInputChange}
                            />
                          </Col>
                        </Row>
                      </div>
                    </Row>
                    <br></br>
                    <input type="submit" value="คํานวน" color="primary" />
                  </form>
                  <h4>ผลลัพธ์: {this.state.result}</h4>
                  <h4 style={{ marginBottom: "10px" }}>x0: {this.state.x0}</h4>
                  <h4 style={{ marginBottom: "10px" }}>x1: {this.state.x1}</h4>
                  <h4 style={{ marginBottom: "10px" }}>x2: {this.state.x2}</h4>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default B2;