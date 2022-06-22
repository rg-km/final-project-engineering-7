import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ExampleImage from "../Assets/example-img.svg";
import ProgressBar from "react-bootstrap/ProgressBar";

function CampaginCard() {
  return (
    <>
      <Col className="lg-3">
        <Card className="w-100">
          <Card.Img variant="top" src={ExampleImage} />
          <Card.Body>
            <Card.Title className="d-flex text-left">Card Title</Card.Title>
            <Card.Text className="d-flex text-start text-muted">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <hr></hr>
            <div className="amount fw-bold d-flex text-start my-3">
              Rp. 15.000.000,00
            </div>
            <ProgressBar animated now={20} />
            <Card.Text>
              <small className="d-flex text-start text-muted my-2">
                Berakhir pada <span className="due-date">27 Oct 2022</span>
              </small>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CampaginCard