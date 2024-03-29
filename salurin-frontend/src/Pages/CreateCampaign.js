import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import StartYourCampaign_Logo from "../Assets/campaign.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateCampaign() {
  const navigate = useNavigate;
  const [newData, setNewData] = useState({});
  let today = new Date();
  const createPost = async () => {
    let time_end_create = new Date(newData.time_end).toISOString();
    await axios.post(
      `https://salurin-backend.herokuapp.com/api/campaigns`,
      JSON.stringify({
        title: newData.title,
        description: newData.description,
        time_start: today,
        target_amount: Number(newData.target_amount),
        time_end: time_end_create,
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
    createPost().then((res) => {
      console.log(res, "succes")
      navigate(`/`);
    });
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
        Create Your Campaign
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
            height: "50rem",
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
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                row={14}
                col={50}
                style={{ height: "22rem" }}
                onChange={(e) =>
                  setNewData({ ...newData, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total Dana</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setNewData({ ...newData, target_amount: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Waktu Berakhir</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) =>
                  setNewData({ ...newData, time_end: e.target.value })
                }
              />
            </Form.Group>
            <Button
              className="border-0"
              style={{
                backgroundColor: "#FF852C",
                width: "100%",
                height: "4rem",
                fontSize: "1.375rem",
                borderRadius: "1.25rem",
              }}
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default CreateCampaign;
