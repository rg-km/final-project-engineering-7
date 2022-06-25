import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CampaignCard from "./CampaignCard";
import axios from "axios";
import { useEffect, useState } from "react";
import './Campaign.css'
import { Link } from "react-router-dom";

function Campaign() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://salurin-backend.herokuapp.com/api/campaigns`
      );
      setData(data.data.data.slice(0, 3));
    };
    fetchData();
  }, []);
  const campaign = data.map((d) => {
    return <CampaignCard key={d.id} {...d} />;
  });
  return (
    <Container>
      <Row>
        <Col>
          <h2
            className="display-1 text-start"
            style={{ fontSize: "3rem", fontWeight: "500" }}
          >
            Campaign Terkini
          </h2>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <Link
            to="/campaign"
            className="text-end text-decoration-none"
            style={{ color: "#599042" }}
          >
            Lainnya
          </Link>
        </Col>
      </Row>
      <div className="card-template">{campaign}</div>
    </Container>
  );
}

export default Campaign;
