import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ExampleImage from "../Assets/Example-Photo.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./CampaignCard.css";

function CampaginCard() {
  return (
    <>
      <div className="campaign-card">
        <div className="image-wrapper">
          <Card.Img src={ExampleImage} style={{ borderRadius: "1.25rem", height:'100%' }} />
        </div>
        <Card.Body>
          <Card.Title
            className="d-flex text-left fw-bold"
            style={{ fontSize: "1rem" }}
          >
            Bangun Ruang Kelas Untuk Anak-Anak Terdampak Covid - 19
          </Card.Title>
          <hr></hr>
          <div
            className="amount fw-bold d-flex text-start"
            style={{ fontSize: "1rem" }}
          >
            Rp. 15.000.000,00
          </div>
          <ProgressBar variant="variant_color" now={20} style={{ margin: "0.5rem 0" }} />
          <Card.Text>
            <div
              className="d-flex text-start text-muted"
              style={{ fontSize: "0.75rem" }}
            >
              Berakhir pada 27 Oct 2022
            </div>
          </Card.Text>
        </Card.Body>
      </div>
    </>
  );
}

export default CampaginCard;
