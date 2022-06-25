import { Container, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import axios from "axios";



function CampaignTable() {
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
  const stories = data.map((d, index) => {
    return (
    <tr>
      <td>{index + 1}</td>
      <td>{d.title}</td>
      <td>{d.description}</td>
      <td>{d.target_amount}</td>
      <td>{d.current_amount}</td>
      <td><Button className='btn-success'>Update</Button></td>
    </tr>);
});
  return (
    <Container>
      <h1 className='text-center mb-3 mt-5'>Data Campaign</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Target Amount</th>
            <th>Current Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stories}
        </tbody>
      </Table>
    </Container>
  );
}

export default CampaignTable;
