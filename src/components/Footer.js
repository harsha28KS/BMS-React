// import "./Footer.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div style={{ background: "black",color:"white"}}>
      <Container fluid>
        <Row style={{padding:"3%"}}>
          <Col xs={2}>1</Col>
          <Col xs={4}>2</Col>
          <Col xs={6} style={{display:"flex",flexDirection:"row-reverse"}}>
            <Button variant="danger">Contact Today!</Button>
          </Col>
        </Row>
        <Row style={{textAlign:"center",padding:"3%",background:"grey"}}>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
