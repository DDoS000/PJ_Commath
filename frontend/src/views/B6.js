import React from "react";
import { Card, CardBody, Row, Col, Input } from "reactstrap";
import { getRootFinding } from "../functions/function";

class B6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: '0',
      b: '1',
      dx: '0.0001',
      result: '',
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
      a: this.state.a,
      b: this.state.b,
      dx: this.state.dx
    };
    getRootFinding(data).then((res) => {
      this.setState({ result: res });
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
                  <h3>Root-Finding คือ</h3>
                  <p>การหาคำตอบของสมการ f(x)=0 หมายถึงการหาค่า x ที่จำทำให้สมการ f(x) มีค่าเป็นศูนย์ คำตอบของสมการเรียกอีกอย่างว่า root ซึ่งแต่ละฟังก์ชันอาจมี 0, 1, หรือ หลายคำตอบก็ได้</p>
                  <h5>► ตัวอย่าง Code</h5>
                  <img
                    alt="..."
                    src={require("assets/img/B6.png")}
                  />
                  <br></br>
                  <br></br>
                  <h5>► ตัวอย่าง input</h5>
                  <p>a = 0</p>
                  <p>b = 1</p>
                  <p>dx = 0.0001</p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card id="card">
                <CardBody id="cardbody">
                  <h3>Root-Finding</h3>
                  <form onSubmit={this.handleSubmit}>
                    <Row>
                      <h4 style={{ marginTop: "5px", marginLeft: "30px" }}>a:</h4>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 100,
                            marginLeft: "13px",
                          }}
                          name="a"
                          type="text"
                          value={this.state.a} onChange={this.handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <h4 style={{ marginTop: "5px", marginLeft: "30px" }}>b:</h4>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 100,
                            marginLeft: "13px",
                          }}
                          name="b"
                          type="text"
                          value={this.state.b} onChange={this.handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <h4 style={{ marginTop: "5px", marginLeft: "15px" }}>dx:</h4>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 100,
                            marginLeft: "13px",
                          }}
                          name="dx"
                          type="text"
                          value={this.state.dx} onChange={this.handleInputChange}
                        />
                      </Col>
                    </Row>
                    <br></br>
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

export default B6;