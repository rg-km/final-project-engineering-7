import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import StartYourCampaign_Logo from "../Assets/campaign.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment"
import { useNavigate, useParams } from "react-router-dom";
import TimeEnd from "./TimeEnd";

function EditCampaign() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://salurin-backend.herokuapp.com/api/campaigns/${id}`
      );
      setData(data.data.data);
      console.log(data.data.data);
    };
    fetchData();
  }, [id]);
  
  const updatePost = async () => {
    let time_end_zone = new Date(data.time_end).toISOString();
    await axios.put(
      `https://salurin-backend.herokuapp.com/api/campaigns/${id}`,
      JSON.stringify({
        "title":data.title,
        "description":data.description,
        "time_start":data.time_start,
        "target_amount":Number(data.target_amount),
        "time_end":time_end_zone,
    }),
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.N1c2nJo8nCgnpvmf1dYSNq_0tqzl9gs_SBG_aDhVCkE`,
        },
      }
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("tes");
    updatePost().then(() => {
      navigate(`/campaign/${id}`)
    });
  }

  if (data === null) {
    return (
      <div class="d-flex justify-content-center align-content-center">
        <div class="spinner-border" role="status"></div>
      </div>
    );
  }
  return (
    <Container>
      <p
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "5rem",
        }}
      >
        Edit Your Campaign
      </p>
      <div
        className="d-flex justify-content-evenly align-items-center"
        style={{ marginBottom: "5rem" }}
      >
        <div
          style={{
            height: "36rem",
            width: "40rem",
          }}
        >
          <img
            alt="Campaign_Lottie"
            src={StartYourCampaign_Logo}
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            height: "54rem",
            width: "32rem",
            border: "2px solid #BFBFBF",
            marginTop: "6.5rem",
            borderRadius: "1rem",
          }}
        >
          <Form style={{ margin: "0 2.25rem" }}>
            <Form.Group className="mb-3 mt-4">
              <Form.Label>Judul Campaign</Form.Label>
              <Form.Control
                type="text"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                row={14}
                col={50}
                style={{ height: "22rem" }}
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total Dana</Form.Label>
              <Form.Control
                type="text"
                value={data.target_amount}
                onChange={(e) =>
                  setData({ ...data, target_amount: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Waktu Berakhir Lama</Form.Label>
              <br></br>
              <TimeEnd />
              <br></br>
              <Form.Label className="mt-3">Waktu Berakhir Baru</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) =>
                  setData({ ...data, time_end: e.target.value })
                }
              />
            </Form.Group>
            {console.log(data.time_end)}
            <Button
              className="border-0"
              style={{
                backgroundColor: "#FF852C",
                width: "100%",
                height: "4rem",
                fontSize: "1.375rem",
                borderRadius: "1.25rem",
                marginTop: "1rem",
              }}
              onClick={handleSubmit}
            >
              Edit Campaign
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default EditCampaign;
