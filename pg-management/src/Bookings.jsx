import React, { useState } from 'react';
import './Bookings.css'; // Ensure this CSS file is updated accordingly

const generateRooms = () => {
  const rooms = [];
  const floorsA = ['a', 'b', 'c', 'd', 'e']; // Floors for Block A
  const floorsB = ['f', 'g', 'h', 'i', 'j']; // Floors for Block B
  const roomsPerFloor = 5;

  // Generate rooms for Block A
  floorsA.forEach((floor, floorIndex) => {
    for (let roomNumber = 1; roomNumber <= roomsPerFloor; roomNumber++) {
      const status = (floorIndex * roomsPerFloor + roomNumber) <= 20
        ? 'Occupied'
        : 'Available';

      rooms.push({
        id: `${floor}${roomNumber}`,
        block: 'A',
        price: 50 + (roomNumber % 5) * 10, // Sample pricing logic
        status
      });
    }
  });

  // Generate rooms for Block B
  floorsB.forEach((floor, floorIndex) => {
    for (let roomNumber = 1; roomNumber <= roomsPerFloor; roomNumber++) {
      const status = ((floorIndex + floorsA.length) * roomsPerFloor + roomNumber) <= 20
        ? 'Occupied'
        : 'Available';

      rooms.push({
        id: `${floor}${roomNumber}`,
        block: 'B',
        price: 50 + (roomNumber % 5) * 10, // Sample pricing logic
        status
      });
    }
  });

  return rooms;
};

const Bookings = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    // Handle room selection logic here if needed
  };

  const rooms = generateRooms();

  // Split rooms into two blocks
  const blockA = rooms.filter(room => room.block === 'A');
  const blockB = rooms.filter(room => room.block === 'B');

  return (
    <div className="booking-container">
      <h1>Room Booking Management</h1>
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color room-available"></div>
          <span>Available</span>
        </div>
        <div className="legend-item">
          <div className="legend-color room-occupied"></div>
          <span>Occupied</span>
        </div>
      </div>
      <div className="room-blocks">
        <div className="room-block">
          <h2>Block A</h2>
          <div className="room-grid">
            {blockA.map(room => (
              <div
                key={room.id}
                className={`room-square ${room.status === 'Available' ? 'room-available' : 'room-occupied'}`}
                onClick={() => handleRoomClick(room)}
              >
                <span>{room.id}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="room-block">
          <h2>Block B</h2>
          <div className="room-grid">
            {blockB.map(room => (
              <div
                key={room.id}
                className={`room-square ${room.status === 'Available' ? 'room-available' : 'room-occupied'}`}
                onClick={() => handleRoomClick(room)}
              >
                <span>{room.id}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="room-types-legend">
        <h3>Room Types</h3>
        <div className="legend">
          <div className="legend-item">
            <span>A, B - Single Rooms</span>
          </div>
          <div className="legend-item">
            <span>C, D, E - Double Sharing Rooms</span>
          </div>
          <div className="legend-item">
            <span>F, G, H, I, J - Three Sharing Rooms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
