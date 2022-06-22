import React from "react";
import Container from "react-bootstrap/Container";
import TestImage from "../Assets/Example-Photo.png";
import Image from "react-bootstrap/Image";
import "./CampaignDetail.css";
import ProfileExample from "../Assets/profile-example.png";

function CampaignDetail() {
  return (
    <Container className="d-flex" style={{ border: "1px solid black" }}>
      <div className="photo-container">
        <div className="big-wrapper">
          <Image src={TestImage} />
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
        <div style={{width: '28.25rem'}}>
          <div className="header-text-detail-container">Campaign Leader</div>
          <div className="d-flex align-items-center" style={{marginTop: '2.25rem'}}>
              <img
                src={TestImage}
                alt="profile_picture"
                className="campaign-profile-picture"
              />
            <p style={{fontSize: '1.5rem', fontWeight: 300}}>Fiki Alamsyah</p>
          </div>
          <hr></hr>
          <div className="header-text-detail-container">Bangun Ruang Kelas Untuk Anak-Anak Terdampak Covid - 19</div>
        </div>
      </div>
    </Container>
  );
}

export default CampaignDetail;
