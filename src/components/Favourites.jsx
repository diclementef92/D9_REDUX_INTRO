import { Col, Container, Row } from "react-bootstrap";
import Job from "./Job";

const Favourites = () => {
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Preferiti</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {/* {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))} */}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
