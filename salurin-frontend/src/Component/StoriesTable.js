import { Container, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";
import axios from "axios";


function ListStories({index,description}) {

}


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
      <td><Button className='btn-success'>Update</Button></td>
    </tr>);
});
  return (
    <Container>
      <h1 className='text-center mb-3 mt-5'>Data Stories</h1>
      <Table striped bordered hover>
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
