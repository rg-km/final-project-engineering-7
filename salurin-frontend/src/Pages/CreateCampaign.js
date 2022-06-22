import React from "react";
import Container from "react-bootstrap/Container";
import StartYourCampaign_Logo from "../Assets/campaign.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CreateCampaign() {
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
      <div className="d-flex justify-content-evenly align-items-center" style={{marginBottom: "5rem"}}>
        <div style={{
            height: "36rem",
            width: "40rem"
          }}>
          <img alt="Campaign_Lottie" src={StartYourCampaign_Logo} style={{width: '100%'}} />
        </div>
        <div style={{
            height: "56.25rem",
            width: "32rem",
            border: '2px solid #BFBFBF', 
            marginTop: '6.5rem', 
            borderRadius: '1rem'
          }}
        >
          <Form style={{margin: '0 2.25rem'}}>
            <Form.Group className="mb-3 mt-4">
              <Form.Label>Judul Campaign</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" row={14} col={50} style={{height: '22rem'}}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Total Dana</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Cover Image</Form.Label>
              <Form.Control type="file" accept="image/png, image/jpeg" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>Upload Other Image</Form.Label>
              <Form.Control type="file" accept="image/png, image/jpeg" placeholder="" />
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
            >
              Buat Campaign
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default CreateCampaign;
