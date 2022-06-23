import CampaignDetail from "../Component/CampaignDetail";
import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";
import CreateCampaign from "./CreateCampaign";
import Campaign from "../Component/Campaign";
import { useEffect, useState } from "react";
import axios from "axios";
import CampaignCard from "../Component/CampaignCard";
import { Button, Container } from "react-bootstrap";

function CampaignPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://salurin-backend.herokuapp.com/api/campaigns`
      );
      setData(data.data.data);
    };
    fetchData();
  }, []);
  const campaign = data.map((d) => {
    return <CampaignCard key={d.id} {...d} />;
  });
  if (data === null) {
    return (
      <div class="d-flex justify-content-center align-content-center">
        <div class="spinner-border" role="status"></div>
      </div>
    );
  }
  return (
    <>
      {/* Navbar component */}
      <Navbar />
      <Container>
        <div
          className="d-flex"
          style={{
            marginTop: "3rem",
            marginBottom: "2.5rem",
            justifyContent: 'space-between'
          }}
        >
          <input
            type="text"
            placeHolder="Mau cari apa..."
            style={{
              border: "1px solid #BFBFBF",
              borderRadius: "1rem",
              height: "2.5rem",
              width: "66rem",
              padding: "0 2.5rem",
            }}
          ></input>
          <Button
            className="border-0"
            style={{
              backgroundColor: "#FF852C",
              height: "2.5rem",
              width: '11.5rem',
              borderRadius: "1.25rem",
            }}
          >
            Search
          </Button>
        </div>
        <div className="card-template">{campaign}</div>
      </Container>
      {/* Create Campaign component
            <CreateCampaign /> */}
      {/* Footer component */}
      <Footer />
    </>
  );
}

export default CampaignPage;
