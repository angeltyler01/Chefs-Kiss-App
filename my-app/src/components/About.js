import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function About() {
    const navigate = useNavigate();
    return (
        <div className="about-container">
            <div className="about-discription">
                <h1>About The Project</h1>
            <p>During the project, our team decided to construct a recipe website where users could create, edit and view their recipes. 
                We had several ideas and features we wanted to add, such as a rating system with stars and the ability to comment on other users' recipes. 
                Still, due to time constraints, we focused on getting a finished product out before features.
            </p>
            </div>
            <Button className='recipe-view-button' variant="outline-warning" onClick={() => navigate(-1)}>Go Back</Button>
            
        </div>
    )
}
export default About