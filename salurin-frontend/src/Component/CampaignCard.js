import Card from "react-bootstrap/Card";
import ExampleImage from "../Assets/Example-Photo.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./CampaignCard.css";
import { Link } from "react-router-dom";

function numberWithDot(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

function CampaginCard({ id, image_url, title, current_amount, target_amount }) {
  image_url = image_url.split("/");
  return (
    <>
      <div className="campaign-card">
        <Link to={`/campaign/${id}`} className="text-decoration-none text-dark d-flex flex-column align-items-center">
          <div className="image-wrapper">
            <Card.Img
              src={`https://salurin-backend.herokuapp.com/images/` + image_url[2]}
              style={{ borderRadius: "1.25rem", height: "100%" }}
            />
          </div>
          <Card.Body style={{ maxWidth: '23rem', width:'100%', maxHeight: '11.125rem', height: '100%', padding:'1rem 1.25rem'}}>
            <Card.Title
              className="d-flex text-left fw-bold"
              style={{ fontSize: "1rem", maxHeight: '2.5rem', height: '100%' }}
            >
              {title}
            </Card.Title>
            <hr></hr>
            <div
              className="amount fw-bold d-flex text-start"
              style={{ fontSize: "1rem" }}
            >
              Rp {numberWithDot(target_amount)}
            </div>
            <ProgressBar
              variant="variant_color"
              now={(current_amount / target_amount) * 100}
              style={{ margin: "0.5rem 0" }}
            />
            <Card.Text>
              <div
                className="d-flex text-start text-muted"
                style={{ fontSize: "0.75rem" }}
              >
                Berakhir pada 27 Oct 2022
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </div>
    </>
  );
}

export default CampaginCard;
