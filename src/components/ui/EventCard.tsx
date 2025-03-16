import { useState } from 'react';

interface EventProps {
  event: {
    id: string;
    name: string;
    date: string;
    thumbnail: string;
    pin: string;
    driveUrl: string;
  };
}

const EventCard = ({ event }: EventProps) => {
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleViewPhotos = () => {
    setShowPinModal(true);
    setError('');
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (pin === event.pin) {
      // Correct PIN - redirect to Google Drive
      window.open(event.driveUrl, '_blank');
      setShowPinModal(false);
      setPin('');
    } else {
      setError('Incorrect PIN. Please try again or contact the photographer.');
    }
  };

  const handleCloseModal = () => {
    setShowPinModal(false);
    setPin('');
    setError('');
  };

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img 
            src={event.thumbnail} 
            alt={event.name}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" 
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
          <p className="text-gray-600 mb-4">{formatDate(event.date)}</p>
          <button 
            onClick={handleViewPhotos}
            // className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
          className='w-full md:w-auto px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider flex items-center justify-center'
          >
            View Photos
          </button>
        </div>
      </div>

      {showPinModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-2">Enter Event PIN</h3>
            <p className="text-gray-600 mb-4">Please enter the PIN provided by your photographer</p>
            
            <form onSubmit={handlePinSubmit}>
              <input 
                type="text" 
                value={pin} 
                onChange={(e) => setPin(e.target.value)} 
                placeholder="Enter PIN"
                className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              {error && (
                <p className="text-red-600 mb-4">{error}</p>
              )}
              
              <div className="flex justify-end space-x-3">
                <button 
                  type="button" 
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors duration-300"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;