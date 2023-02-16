import { Button, Col, Container, Row } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  const preferiti = useSelector((state) => state.preferiti);
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Preferiti</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {preferiti.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      <Button className="m-2" onClick={() => navigate("/")}>
        Torna alla ricerca
      </Button>
    </Container>
  );
};

export default Favourites;
