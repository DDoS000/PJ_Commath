import React from "react";
import { Card, CardBody, Row, Col, Input } from "reactstrap";
import { getDifferentiation } from "../functions/function";

class B4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h: '0.64',
      p: '2',
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
      h: this.state.h,
      p: this.state.p
    };
    getDifferentiation(data).then((res) => {
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
                  <p>การหาผลต่าง</p>

                  <p>กำหนดฟังก์ชัน f(x) จงคำนวณหา dnfdxn เมื่อกำหนดค่า x ให้
                  โดยที่ f(x) กำหนดได้สองแบบคือ</p>

                  <p>❥ กำหนดเป็นฟังก์ชันสำหรับ การคำนวณหาโดยตรง y=f(x)</p>
                  <p>❥ กำหนดความสัมพันธ์เป็นแบบชุดข้อมูลมาให้ (xi,yi),i=0,1,..,n</p>
                  <h5>► ตัวอย่าง Code</h5>
                  <img
                    alt="..."
                    src={require("assets/img/B4.png")}
                  />
                  <br></br>
                  <br></br>
                  <h5>► ตัวอย่าง input</h5>
                  <p>h = 0.64</p>
                  <p>p = 2</p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card id="card">
                <CardBody id="cardbody">
                  <h3>Differentiation</h3>
                  <form onSubmit={this.handleSubmit}>
                    <Row>
                      <h3 style={{ marginTop: "5px", marginLeft: "30px" }}>h:</h3>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                            marginLeft: "13px",
                          }}
                          name="h"
                          type="text"
                          value={this.state.h} onChange={this.handleInputChange}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <h3 style={{ marginTop: "5px", marginLeft: "30px" }}>p:</h3>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 60,
                            marginLeft: "13px",
                          }}
                          name="p"
                          type="text"
                          value={this.state.p} onChange={this.handleInputChange}
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

export default B4;