import { Container, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import axios from "axios";


function StoriesTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `https://salurin-backend.herokuapp.com/api/storyes`
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
      <td className='text-center'><Button className='btn-light text-white' style={{backgroundColor: "#FF852C"}}>Update</Button></td>
    </tr>);
});
  return (
    <Container className='mb-5 mt-5'>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Description</th>
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

export default StoriesTable;
