import './Stories.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function StoriesCard({id, description, username}) {
    return (<Card border='light' style={{
        width: '24rem',
        height: '14.25rem'
    }} className='p-4 stories-card shadow-sm'>
        <Card.Text className='text-dark text-start'>{description}</Card.Text>
        <div className='stories-profile d-flex'>
            <Image src={'https://salurin-backend.herokuapp.com/images/3-Group 21.png'} className="rounded-circle mr-2" width={50} height={50}></Image>
            <span className='fw-bold mx-3 d-flex align-items-center'>{username}</span>
        </div>
    </Card>);
}
export default StoriesCard;