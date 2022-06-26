import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import StartYourCampaign_Logo from "../Assets/campaign.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateCampaignImages() {
  const navigate = useNavigate;
  let imgData = new FormData();
  console.log(imgData);
  const createImagePost = async () => {
    await axios.post(
      `https://salurin-backend.herokuapp.com/api/campaign-images`,
      JSON.stringify({
        campaign_id: ``,
        file: imgData,
      }),
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxfQ.N1c2nJo8nCgnpvmf1dYSNq_0tqzl9gs_SBG_aDhVCkE`,
        },
      }
    );
  };

  function handleImageSubmit(e) {
    console.log("tes2");
    createImagePost().then(() => {
      navigate(`/campaign`);
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
          marginBottom: "5rem",
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
            height: "26rem",
            width: "32rem",
            border: "2px solid #BFBFBF",
            marginTop: "6.5rem",
            borderRadius: "1rem",
          }}
        >
          <Form style={{ margin: "0 2.25rem" }}>
            <Form.Group className="mb-3 mt-4">
              <Form.Label>Upload Other Image 1</Form.Label>
              <Form.Control
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => imgData.append("file", e.target.files)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Other Image 2</Form.Label>
              <Form.Control
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => imgData.append("file", e.target.files)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>Upload Cover Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => imgData.append("file", e.target.files)}
                required
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
              onClick={() => {
                handleImageSubmit();
                navigate = "/";
              }}
            >
              Buat Campaign
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

{
  /* <Form.Group className="mb-3">
                <Form.Label>Upload Other Image 1</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) =>
                    imgData.append("file", e.target.files)
                    }
                    required
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Upload Other Image 2</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) =>
                    imgData.append("file", e.target.files)
                    }
                    required
                />
                </Form.Group>
                <Form.Group className="mb-5">
                <Form.Label>Upload Cover Image</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) =>
                    imgData.append("file", e.target.files)
                    }
                    required
                />
                </Form.Group> */
}

export default CreateCampaignImages;
