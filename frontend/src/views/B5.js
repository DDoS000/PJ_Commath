import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

class B5 extends React.Component {
    render() {
        return (
            <>
              <div className="content">
                <Row>
                  <Col md="12">
                    <Card>
                      <CardBody>
                        <div
                          id="map"
                          className="map"
                          style={{ position: "relative", overflow: "hidden" }}
                        >
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

export default B5;