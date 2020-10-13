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
import { getB2s } from "../functions/function";
import { useNavigate } from "react-router-dom";


// function B2s() {
//   const navigate = useNavigate();
//   const [bit2string, setBit2string] = useState();
//   const [result, setResult] = useState("");
//   const generate = () => {
//     getB2s(bit2string).then((res) => {
//       setResult(res);
//     });
//   };


function B1() {
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
};

export default B1;