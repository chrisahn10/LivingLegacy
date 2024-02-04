import { useNavigate } from 'react-router-dom';
import '../assets/css/Events.css';
import beigeImage from '../assets/home/beige.jpg';

function Events() {
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  // Check if there's an eventId in the URL
  const isEventDetailsPage = window.location.pathname.split('/').length === 3;

  const backgroundImageStyle = {
    backgroundImage: `url(${beigeImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  // If it's the main Events page, render the content for Events
  if (!isEventDetailsPage) {
    const handleEventClick = (eventId) => {
      // Navigate to the EventDetails page when an event is clicked
      navigate(`/events/${eventId}`);
    };

    return (
      <div className="events-container">
        <h1>Chatting with Legacies</h1>
        {/* You can add your new component or content here */}
      </div>
    );
  }

  // If it's the EventDetails page, you can leave it empty or render something else based on your requirements
  return <div>EventDetails page content or placeholder</div>;
}

export default Events;
