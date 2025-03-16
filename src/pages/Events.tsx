
import EventCard from '../components/ui/EventCard';
import { events } from '../data/events';


const EventsPage = () => {


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Recent Events</h1>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      
      
    </div>
  );
};

export default EventsPage;