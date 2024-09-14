import React, { useState, useEffect } from 'react';
import { ArrowLeft, RotateCcw, Plus, Minus, Calendar } from 'lucide-react';
import { Provider } from 'react-redux';
import store from './store';

const BookingApp = () => {
  const [screen, setScreen] = useState(1);
  const [selectedOutlet, setSelectedOutlet] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [groupSize, setGroupSize] = useState(2);
  const [userDetails, setUserDetails] = useState({ name: '', mobile: '', email: '', otp: '' });
  const [acceptedTerms, setAcceptedTerms] = useState([false, false, false]);
  const [isLoading, setIsLoading] = useState(true);

  const outlets = ['Penang', 'Sunway', 'One Utama'];
  const rooms = [
    { name: 'Mystic Forest', occupation: 75, capacity: 6, priceRange: '50-70' },
    { name: 'Underwater World', occupation: 50, capacity: 4, priceRange: '40-60' },
    { name: 'Space Odyssey', occupation: 30, capacity: 8, priceRange: '60-80' },
    { name: 'Medieval Castle', occupation: 60, capacity: 6, priceRange: '55-75' },
    { name: 'Futuristic City', occupation: 40, capacity: 10, priceRange: '70-90' }
  ];
  const timeSlots = [
    { time: '10:00', available: true },
    { time: '11:15', available: false },
    { time: '12:30', available: true },
    { time: '13:45', available: true },
    { time: '15:00', available: false },
    { time: '16:15', available: true },
    { time: '17:30', available: true },
    { time: '18:45', available: false },
    { time: '20:00', available: true },
    { time: '21:15', available: true },
    { time: '22:30', available: true }
  ];

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const handleOutletSelect = (outlet) => {
    setSelectedOutlet(outlet);
    setScreen(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleRoomAndTimeSelect = (room, time) => {
    setSelectedRoom(room);
    setSelectedTime(time);
    setScreen(3);
  };

  const handleGroupSizeChange = (increment) => {
    setGroupSize(prevSize => Math.min(Math.max(prevSize + increment, 2), 12));
  };

  const handleUserDetailsChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleTermsChange = (index) => {
    const newTerms = [...acceptedTerms];
    newTerms[index] = !newTerms[index];
    setAcceptedTerms(newTerms);
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', { selectedOutlet, selectedDate, selectedRoom, selectedTime, groupSize, userDetails });
    alert('Booking submitted successfully!');
  };

  const goBack = () => {
    setScreen(prevScreen => Math.max(1, prevScreen - 1));
  };

  const confirmRestart = () => {
    if (window.confirm('Are you sure you want to restart the booking journey?')) {
      restart();
    }
  };

  const restart = () => {
    setScreen(1);
    setSelectedOutlet('');
    setSelectedDate(new Date());
    setSelectedRoom('');
    setSelectedTime('');
    setGroupSize(2);
    setUserDetails({ name: '', mobile: '', email: '', otp: '' });
    setAcceptedTerms([false, false, false]);
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center p-2 bg-gray-800 text-yellow-300">
      {screen > 1 && (
        <button onClick={goBack} className="p-1">
          <ArrowLeft size={20} />
        </button>
      )}
      <h1 className="text-sm font-bold">Booking Assistant</h1>
      <button onClick={confirmRestart} className="p-1">
        <RotateCcw size={20} />
      </button>
    </div>
  );

  const renderProgressIndicator = () => (
    <div className="flex justify-between mb-4">
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          className={`w-1/3 h-2 ${
            screen >= step ? 'bg-yellow-300' : 'bg-gray-600'
          }`}
        />
      ))}
    </div>
  );

  const renderChatBubble = (message) => (
    <div className="bg-gray-700 p-2 rounded-lg mb-2 max-w-3/4 self-start text-sm text-yellow-300">
      {message}
    </div>
  );

  const renderDatePicker = () => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <button onClick={() => handleDateSelect(new Date(selectedDate.setDate(selectedDate.getDate() - 1)))}>
          &lt;
        </button>
        <div className="flex items-center">
          <Calendar size={20} className="mr-2" />
          {selectedDate.toDateString()}
        </div>
        <button onClick={() => handleDateSelect(new Date(selectedDate.setDate(selectedDate.getDate() + 1)))}>
          &gt;
        </button>
      </div>
    </div>
  );

  const renderRoomCard = (room) => (
    <div key={room.name} className="bg-gray-700 p-4 rounded-lg mb-4">
      <h3 className="font-bold mb-2">{room.name}</h3>
      <p>Capacity: {room.capacity} people</p>
      <p>Price: RM {room.priceRange}</p>
      <p>Occupation: {room.occupation}%</p>
      <div className="mt-2">
        {timeSlots.filter(slot => slot.available).map(slot => (
          <button
            key={slot.time}
            onClick={() => handleRoomAndTimeSelect(room.name, slot.time)}
            className="bg-yellow-300 text-gray-800 p-2 rounded mr-2 mt-2"
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );

  const renderSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-600 rounded w-1/2 mb-4"></div>
      <div className="h-20 bg-gray-600 rounded mb-4"></div>
      <div className="h-20 bg-gray-600 rounded mb-4"></div>
      <div className="h-20 bg-gray-600 rounded mb-4"></div>
    </div>
  );

  const renderScreen = () => {
    if (isLoading) {
      return renderSkeleton();
    }

    switch (screen) {
      case 1:
        return (
          <>
            {renderChatBubble("Welcome! Which outlet would you like to book?")}
            <div className="flex flex-col items-stretch mt-2">
              {outlets.map((outlet) => (
                <button
                  key={outlet}
                  onClick={() => handleOutletSelect(outlet)}
                  className="bg-gray-700 text-yellow-300 p-2 my-1 rounded w-full text-sm"
                >
                  {outlet}
                </button>
              ))}
            </div>
          </>
        );
      case 2:
        return (
          <>
            {renderChatBubble(`Great! You've selected ${selectedOutlet}. Choose a date and room:`)}
            {renderDatePicker()}
            <div className="overflow-y-auto max-h-96">
              {rooms.map(renderRoomCard)}
            </div>
          </>
        );
      case 3:
        return (
          <>
            {renderChatBubble("Please review your booking and enter your details:")}
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <h3 className="font-bold mb-2">Booking Summary</h3>
              <p>Outlet: {selectedOutlet}</p>
              <p>Date: {selectedDate.toDateString()}</p>
              <p>Room: {selectedRoom}</p>
              <p>Time: {selectedTime}</p>
              <div className="flex justify-between items-center mt-2">
                <button onClick={() => handleGroupSizeChange(-1)} className="bg-yellow-300 text-gray-800 p-2 rounded">
                  <Minus size={20} />
                </button>
                <span>{groupSize} people</span>
                <button onClick={() => handleGroupSizeChange(1)} className="bg-yellow-300 text-gray-800 p-2 rounded">
                  <Plus size={20} />
                </button>
              </div>
              <p className="mt-2">Total price: RM {groupSize * 50}</p>
            </div>
            <div className="flex flex-col items-stretch mt-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userDetails.name}
                onChange={handleUserDetailsChange}
                className="mb-2 p-2 border rounded text-sm bg-gray-700 text-yellow-300 placeholder-yellow-200"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={userDetails.mobile}
                onChange={handleUserDetailsChange}
                className="mb-2 p-2 border rounded text-sm bg-gray-700 text-yellow-300 placeholder-yellow-200"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={handleUserDetailsChange}
                className="mb-2 p-2 border rounded text-sm bg-gray-700 text-yellow-300 placeholder-yellow-200"
              />
              {['I agree to the terms and conditions', 'I agree to the privacy policy', 'I agree to receive marketing emails'].map((term, index) => (
                <div key={index} className="flex items-center mb-1 text-sm text-yellow-300">
                  <input
                    type="checkbox"
                    checked={acceptedTerms[index]}
                    onChange={() => handleTermsChange(index)}
                    className="mr-2"
                  />
                  <label>{term}</label>
                </div>
              ))}
              <button
                onClick={handleSubmit}
                disabled={!acceptedTerms.every(Boolean) || Object.values(userDetails).some(v => !v)}
                className="bg-yellow-300 text-gray-800 p-2 rounded mt-2 disabled:bg-gray-500 disabled:text-gray-300 text-sm"
              >
                Confirm Booking
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {renderHeader()}
      <div className="flex-1 flex flex-col overflow-hidden p-2">
        {renderProgressIndicator()}
        <div className="flex-2 overflow-y-auto bg-gray-800 rounded-lg shadow-md p-3">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <BookingApp />
  </Provider>
);

export default BookingApp;
