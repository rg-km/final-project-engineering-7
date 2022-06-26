import Navbar from "../Component/navbar";
import Footer from "../Component/Footer";
import { Container } from "react-bootstrap";
import StoriesTable from "../Component/StoriesTable";

function MyStoryPage() {
    return (
        <Container>
            {/* Navbar component */}
            <Navbar />
            <Container>
                <h1 className='mt-5 text-center'>My Stories</h1>
                <StoriesTable/>
            </Container>
            <Footer />
        </Container>
    );
}

export default MyStoryPage;
