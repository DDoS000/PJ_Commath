import React from "react";
import { Card, CardBody, Row, Col, Input } from "reactstrap";
import { getIntegration } from "../functions/function";

class B5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: '0',
      b: '3',
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
      a: this.state.a,
      b: this.state.b
    };
    getIntegration(data).then((res) => {
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
                  <h3>Differentiation คือ</h3>
                  <p>คำนวณค่า ∫baf(x)dx เมื่อกำหนดฟังก์ชัน f(x) มาให้</p>
                  <p>คำนวณหาพื้นที่ใต้กราฟ f(x) จากในช่วง x∈[a,b] โดยปกติแล้วจะใช้วิธีประมาณค่าโดยการแบ่งพื้นที่ออกเป็นช่วงๆ แต่ละช่วงจะเป็นสี่เหลี่ยมแล้วรวมพื้นที่สี่เหลี่ยมเหล่านั้นมาประมาณค่าพื้นที่ใต้กราฟหรือค่า ∫baf(x)dx นั่นเอง
                  </p>

                  <h5>► ตัวอย่าง Code</h5>
                  <img
                    alt="..."
                    src={require("assets/img/B6.png")}
                  />
                  <br></br>
                  <br></br>
                  <h5>► ตัวอย่าง input</h5>
                  <p>a = 0</p>
                  <p>b = 3</p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card id="card">
                <CardBody id="cardbody">
                  <h3>Integration</h3>
                  <form onSubmit={this.handleSubmit}>
                    <Row>
                      <h4 style={{ marginTop: "5px", marginLeft: "30px" }}>a:</h4>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
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
                            width: 60,
                            marginLeft: "13px",
                          }}
                          name="b"
                          type="text"
                          value={this.state.b} onChange={this.handleInputChange}
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

export default B5;