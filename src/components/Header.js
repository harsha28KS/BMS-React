import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <div style={{ background: "black", color: "white" }}>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Row>
            {/* logo */}
            <Col xs={3}>
              <Navbar.Brand href="/">
                <img src="./BMS_logo.png" width="150px" />
              </Navbar.Brand>
            </Col>
            {/* search box */}
            <Col xs={6}>
              <Form className="d-flex">
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                  Search for Movies, Events, Plays, Sports and Activities
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>icon</InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Search for Movies, Events, Plays, Sports and Activities"
                  />
                </InputGroup>
              </Form>
            </Col>

            <Col
              xs={3}
            >
              <Button variant="danger">Contact Today!</Button>
            </Col>
          </Row>

          
        </Container>
      </Navbar>

      <Container fluid>
        Nav Links
        <a href="/register">User Registration</a> &nbsp;&nbsp;
        <a>second</a>

      </Container>
    </div>
  );
}

export default Header;
