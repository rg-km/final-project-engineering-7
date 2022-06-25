import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Lottie from "lottie-web";
import jumbotronLottie from "../Assets/hero-lottie.json";
import React from "react";


function Jumbotron() {
  React.useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: document.querySelector("#jumbotron-lottie"),
      animationData: jumbotronLottie,
      loop: true,
    });
    return () => instance.destroy();
  }, []);

  return (
    <Container>
      <Row className="d-flex text-dark justify-content-center align-items-center">
        <Col>
          <div className="text-start">
            <p className="mb-0 fw-bold tittle text-dark" style={{fontSize:"4rem"}}>MARI ...</p>
            <div className="mb-0 fw-bold tittle" style={{fontSize:"4rem"}}>
              <span style={{color:"#599042"}}>GOTONG</span> <span style={{color:"#FF852C"}}> ROYONG!</span>
            </div>
            <div className="my-3 text-muted d-flex " style={{fontSize:"1.125rem"}}>
              Salurin adalah crowdfunding platform yang berfokus pada bidang
              pendidikan guna membantu pendidikan indonesia menjadi lebih
              merata.
            </div>
            <Button className="border-0 px-4 py-2" style={{backgroundColor: "#FF852C"}}>Mulai Salurin</Button>
          </div>
        </Col>
        <Col>
          <div className="d-none d-md-block img-responsive" id="jumbotron-lottie" />
        </Col>
      </Row>
    </Container>
  );
}
export default Jumbotron;