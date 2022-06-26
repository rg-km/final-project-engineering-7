import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import TestImage from "../Assets/Example-Photo.png";
import Image from "react-bootstrap/Image";
import "./CampaignDetail.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import ProfileExample from "../Assets/profile-example.png";
import Button from "react-bootstrap/Button";
import Campaign from "./Campaign";
// import navbar component
import Navbar from "../Component/navbar";
// import footer component
import Footer from "../Component/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditCampaign from "../Pages/EditCampaign";

function numberWithDot(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

function CampaignDetail() {
  let { id } = useParams();

  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://salurin-backend.herokuapp.com/api/campaigns/${id}`
      );
      setData(data.data.data);
    };
    fetchData();
  }, [id]);
  if (data === null) {
    return (
      <div className="d-flex justify-content-center align-content-center">
        <div className="spinner-border" role="status">
        </div>
      </div>
    );
  }
  let image_url = (data.image_url).split('/')
  return (
    <>
      <Navbar />
      <Container>
        <div className="campaign-detail-container">
          <div className="photo-container">
            <div className="big-wrapper">
              <Image src={TestImage} />
              {/* <Image classname="big-wrapper" src={`https://salurin-backend.herokuapp.com/images/` + image_url[2]} /> */}
            </div>
            <div className="small-group-wrapper">
              <div>
                <Image className="small-wrapper" src={TestImage} />
              </div>
              <div>
                <Image className="small-wrapper" src={TestImage} />
              </div>
            </div>
          </div>
          <div className="detail-container">
            <div style={{ width: "28.25rem" }}>
              <div className="header-text-detail-container">
                Campaign Leader
              </div>
              <div
                className="d-flex align-items-center"
                style={{ marginTop: "2.25rem" }}
              >
                <img
                  src={ProfileExample}
                  alt="profile_picture"
                  className="campaign-profile-picture"
                />
                <p style={{ fontSize: "1.5rem" }}>{data.user.name}</p>
              </div>
              <hr></hr>
              <div className="header-text-detail-container">{data.title}</div>
              <div
                style={{
                  marginTop: "1rem",
                  maxHeight: "14.25rem",
                  height: "100%",
                  overflowY: "scroll",
                  paddingTop: "0.5rem",
                  wordWrap: "break-word"
                }}
              >
                <div
                  style={{ whiteSpace: "pre-wrap" }}
                  dangerouslySetInnerHTML={{ __html: `${data.description}` }}
                ></div>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                Rp {numberWithDot(data.target_amount)}
              </div>
              <ProgressBar
                variant="variant_color"
                now={(data.current_amount / data.target_amount) * 100}
                style={{ marginTop: "0.75rem" }}
              />
              <p style={{ marginTop: "0.75rem", fontSize: "1rem" }}>
                Berakhir pada tanggal {(data.time_end).toString().slice(0,10)}
              </p>
              <Button
                className="border-0"
                style={{
                  backgroundColor: "#FF852C",
                  width: "100%",
                  height: "4rem",
                  fontSize: "1.375rem",
                  borderRadius: "1.25rem",
                }}
              >
                Salurin Dana
              </Button>
            </div>
          </div>
        </div>
        <Campaign />
        <EditCampaign/>
      </Container>
      <Footer />
    </>
  );
}

export default CampaignDetail;
