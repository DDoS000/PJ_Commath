import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Input,
} from "reactstrap";
import { getB2S } from "../functions/function";
import "assets/demo/B.css";

class B1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '01111000000001010000000000000000',
      result: 'รอคําตอบ',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    getB2S(this.state.value).then((res) => {
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
                  <h3> Binary → Integer </h3>
                  <h5>► ตัวอย่าง Code</h5>
                  <img
                    alt="..."
                    src={require("assets/img/b1.png")}
                  />
                  <br></br>
                  <br></br>
                  <p>ในCode จะทําการรับค่ามาแปลงเป็น Binary</p>
                  <br></br>
                  <br></br>
                  <h5>► ตัวอย่าง input</h5>
                  <p>01111000000001010000000000000000 เป็นเลข Binary</p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card id="card">
                <CardBody id="cardbody">
                  <h3>Basic Computing</h3>
                  <form onSubmit={this.handleSubmit}>
                    <Row>
                      <h4 style={{ marginTop: "5px", marginLeft: "30px" }}>Binary :</h4>
                      <Col>
                        <Input
                          style={{
                            marginBottom: "10px",
                            width: 500,
                            marginLeft: "13px",
                          }}
                          name="value"
                          type="text"
                          value={this.state.value} onChange={this.handleChange}
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


export default B1;