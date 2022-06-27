import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


function StoryTable() {
    const [data, setData] = useState([]);
    let id = localStorage.getItem('id')

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(
                `https://salurin-backend.herokuapp.com/api/campaigns?user_id=${id}`
            );
            setData(data.data.data);
        };
        fetchData();
    }, []);
    const stories = data.map((d, index) => {
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{d.description}</td>
                <td className='text-center'><Button className='btn-light text-white' style={{ backgroundColor: "#FF852C" }}>Update</Button></td>
            </tr>);
    });
    return (
        <Container className='mb-5 mt-2'>
        <Link className="btn btn-success mb-3" to="/">Buat Story Baru</Link>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th >#</th>
                        <th>Deskripsi</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {stories}
                </tbody>
            </Table>
        </Container>
    );
}

export default  StoryTable;
