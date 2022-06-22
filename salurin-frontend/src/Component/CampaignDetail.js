import React from "react";
import Container from "react-bootstrap/Container";
import TestImage from "../Assets/Example-Photo.png";
import Image from "react-bootstrap/Image";
import "./CampaignDetail.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import ProfileExample from "../Assets/profile-example.png";
import Button from "react-bootstrap/Button";
import Campaign from "./Campaign";

function CampaignDetail() {
  return (
    <Container>
      <div className="campaign-detail-container">
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
          <div style={{ width: "28.25rem" }}>
            <div className="header-text-detail-container">Campaign Leader</div>
            <div
              className="d-flex align-items-center"
              style={{ marginTop: "2.25rem" }}
            >
              <img
                src={ProfileExample}
                alt="profile_picture"
                className="campaign-profile-picture"
              />
              <p style={{ fontSize: "1.5rem"}}>Fiki Alamsyah</p>
            </div>
            <hr></hr>
            <div className="header-text-detail-container">
              Bangun Ruang Kelas Untuk Anak-Anak Terdampak Covid - 19
            </div>
            <div style={{marginTop: '1rem'}}>
              SMK Negeri 1 Cipongkor, Kabupaten Bandung Barat (KBB), sejak didirikan tahun 2016 dan meluluskan tiga angkatan hingga kini masih belum memiliki ruang kelas.
              <br></br>
              <br></br>
              Artikel ini telah diterbitkan di halaman SINDOnews.com pada Rabu, 04 Agustus 2021 - 13:46 WIB oleh Adi Haryanto dengan judul "Belum Punya Ruang Kelas, 450 Siswa SMKN 1 Cipongkor Numpang Belajar di SD".
            </div>
            <div style={{marginTop: '3.5rem', fontSize: '2rem', fontWeight: 'bold'}}>Rp 100.000.000</div>
            <ProgressBar animated now={20} style={{marginTop: '0.75rem'}}/>
            <p style={{marginTop: '0.75rem', fontSize: '1rem'}}>Berakhir pada tanggal 27 Juni 2022</p>
            <Button className="border-0" style={{backgroundColor: "#FF852C", width: '100%', height: '4rem', fontSize: '1.375rem', borderRadius: '1.25rem'}}>Salurin Dana</Button>
          </div>
        </div>
      </div>
      <Campaign />
    </Container>
  );
}

export default CampaignDetail;
