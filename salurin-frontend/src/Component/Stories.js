import './Stories.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from "react";
import axios from "axios";
import Avatar from '../Assets/avatar-sully.png';
import StoriesCard from './StoriesCard';



function Stories() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(
                `https://salurin-backend.herokuapp.com/api/storyes`
            );
            setData(data.data.data.slice(0, 3));
        };
        fetchData();
    }, []);
    const stories = data.map((d) => {
        return <StoriesCard key={d.id} {...d} />;
    });
    return (

        <div>
            <h2 className='display-1 text-start' style={{ fontSize: '3rem', fontWeight: '500', marginBottom: '1.25rem' }}><Container>Stories</Container></h2>

            <div className='d-flex stories-wrapper my-2 mb-5 w-100'>
                <div className='slider'>
                {stories}
                </div>
            </div>
        </div>
    )
}

export default Stories;