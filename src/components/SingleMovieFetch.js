import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import data from "./movies.json";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

function SingleMovie() {
  const { movid } = useParams();
  const [singledata, setSingleData] = useState([]);

  useEffect(async () => {
    try {
      // const response = await axios.get(`http://localhost:4000/movie/${movid}`);
      const response = await axios.get(`https://bms-backend-harshaks.herokuapp.com/movie/${movid}`);
      console.log(response.data);
      setSingleData([response.data]);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <Container fluid style={{ padding: "5%", background: "lightblue" }}>
        <Row style={{ textAlign: "center" }}>
          {singledata.map((mov) => {
            return (
              <Col
                id={mov.id}
                key={mov.id}
                xs={6}
                md={4}
                lg={3}
                style={{ marginBottom: "2%" }}
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={mov.imageurl}
                    style={{ background: "red" }}
                  />
                  <Card.Body>
                    <Card.Title>{mov.title}</Card.Title>
                    <Card.Text>{mov.actor}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default SingleMovie;
