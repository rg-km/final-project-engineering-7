import React, {useState} from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import Header from './navbar'
import Footer from './Footer'

import './Dashboard.css'

function Dashboard(){
    const [showEdit, setShowEdit] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [isLogin, setShowisLogin] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleCloseUpdate = () => setShowUpdate(false);
    const handleShowUpdate = () => setShowUpdate(true);

    return(
        <>
        <Header />
        <Container>
            <Table className="mt-4">
                <thead className="thead">
                    Data Mahasiswa
                </thead>
        <Table style={{textAlign: "center"}} className="mt-4 mb-4" striped bordered hover>
        <thead>
            <tr>
            <th>Title</th>
            <th>Target Amount</th>
            <th>Current Amount</th>
            <th colSpan={2}>Action</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr>
                <tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr><tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr><tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr><tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr><tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr><tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr>
                <tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr>
                <tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr>
                <tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr>
                <tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr>   
                <tr>
                <td>Judul</td>
                <td>Target</td>
                <td>Current</td>
                <td><Button onClick={handleShowEdit} className="Button-Edit">Edit</Button></td>
                <td><Button onClick={handleShowUpdate} className="Button-Update">Update</Button></td>
                </tr>   
            </tbody>
        </Table>
        </Table>
        </Container>
        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
            <Modal.Title className="modal-title">Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title :</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan Judul" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Target Ammount :</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan Target Amount" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Current Ammount :</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan Current Amount" />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
                Close
            </Button>
            <Button className="Button-Save-Edit" variant="primary" onClick={handleCloseEdit}>
                Simpan Perubahan
            </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showUpdate} onHide={handleCloseUpdate}>
            <Modal.Header closeButton>
            <Modal.Title className="modal-title">Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title :</Form.Label>
                    <Form.Control disabled type="text" placeholder="Judul" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Target Ammount :</Form.Label>
                    <Form.Control disabled type="text" placeholder="Amount" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Current Ammount :</Form.Label>
                    <Form.Control disabled type="text" placeholder="Amount" />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseUpdate}>
                Close
            </Button>
            <Button className="Button-Save" variant="primary" onClick={handleCloseUpdate}>
                Simpan Perubahan
            </Button>
            </Modal.Footer>
        </Modal>
        <Footer />
        </>
    )
}

export default Dashboard