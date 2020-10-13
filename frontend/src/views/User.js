import React from "react";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

import ProgressBar from 'react-bootstrap/ProgressBar'

class User extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/tan.jpg")}
                      />
                      <h5 className="title">Suphamongkhon Khotasit</h5>
                    </a>
                    <p className="description">@DDoS000</p>
                  </div>
                  <p className="description text-center">
                    "ฉันคิดว่า Bug มันคือความผูกพัน <br />
                     คิดส่า Bug แท้ ต้องเจอกับมันช่วง Runtime<br />
                     ยื่งเนิ่นนาน นานไปเท่าไหร่ Debug ยิ่งมีค่า<br />
                     ที่ฉันต้องรู้ ที่เคยฝัน Bug ที่ฉัยเคยเข้าใจ"
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="3" md="6" xs="6">
                        <h5>
                          30% <br />
                          <small>สุขภาพ</small>
                        </h5>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                        <h5>
                          70% <br />
                          <small>พลัง</small>
                        </h5>
                      </Col>
                      <Col className="mr-auto" lg="3">
                        <h5>
                          70% <br />
                          <small>ขอบตา</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Skill in Project</CardTitle>
                </CardHeader>
                <CardBody>
                  <div>
                    <h5>React js</h5>
                    <ProgressBar striped variant="success" now={40} /><br></br>
                    <h5>Fast Api</h5>
                    <ProgressBar striped variant="info" now={20} /><br></br>
                    <h5>Copy And Paste</h5>
                    <ProgressBar striped variant="warning" now={60} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
