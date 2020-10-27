import React from "react";
import { Card, CardBody, Row, Col, Input } from "reactstrap";
import { getInterpolation } from "../functions/function";

class B3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '5',
      xi1: '0',
      xi2: '8',
      xi3: '14',
      xi4: '20',
      xi5: '23',
      xi6: '30',
      yi1: '0',
      yi2: '50',
      yi3: '96',
      yi4: '110',
      yi5: '100',
      yi6: '86',
      result: 'รอคําตอบ',
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
      x: this.state.x,
      xi: [this.state.xi1, this.state.xi2, this.state.xi3, this.state.xi4, this.state.xi5, this.state.xi6],
      yi: [this.state.yi1, this.state.yi2, this.state.yi3, this.state.yi4, this.state.yi5, this.state.yi6]
    };
    getInterpolation(data).then((res) => {
      this.setState({ result: `วินาทีที่ ${this.state.x} จะมีความเร็วประมาณ ${res}` });
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
                  <h3>Interpolation</h3>
                  <h5>► ตัวอย่าง Code</h5>
                  <img
                    alt="..."
                    src={require("assets/img/B3.png")}
                  />
                  <br></br>
                  <br></br>
                  <h5>► ตัวอย่าง input</h5>
                  <p>t = 5</p>
                  <p>x = [ 0, 8, 14, 20, 23, 30 ]</p>
                  <p>y = [ 0, 50, 96, 110, 100, 86 ]</p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card id="card">
                <CardBody id="cardbody">
                  <h3>Interpolation</h3>
                  <form onSubmit={this.handleSubmit}>
                    <Row>
                      <h3 style={{ marginTop: "5px", marginLeft: "30px" }}>t:</h3>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="x"
                          type="text"
                          value={this.state.x} onChange={this.handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <h3 style={{ marginTop: "5px", marginLeft: "20px" }}>xi:</h3>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="xi1"
                          type="text"
                          value={this.state.xi1} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="xi2"
                          type="text"
                          value={this.state.xi2} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="xi3"
                          type="text"
                          value={this.state.xi3} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="xi4"
                          type="text"
                          value={this.state.xi4} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="xi5"
                          type="text"
                          value={this.state.xi5} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="xi6"
                          type="text"
                          value={this.state.xi6} onChange={this.handleInputChange}
                        />
                      </Col>
                    </Row>

                    <Row>
                      <h3 style={{ marginTop: "5px", marginLeft: "20px" }}>xi:</h3>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="yi1"
                          type="text"
                          value={this.state.yi1} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="yi2"
                          type="text"
                          value={this.state.yi2} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="yi3"
                          type="text"
                          value={this.state.yi3} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="yi4"
                          type="text"
                          value={this.state.yi4} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="yi5"
                          type="text"
                          value={this.state.yi5} onChange={this.handleInputChange}
                        />
                      </Col>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                          }}
                          name="yi6"
                          type="text"
                          value={this.state.yi6} onChange={this.handleInputChange}
                        />
                      </Col>
                    </Row>
                    <input type="submit" value="คํานวน" />
                  </form>
                  <h4>ผลลัพธ์: {this.state.result}</h4>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default B3;