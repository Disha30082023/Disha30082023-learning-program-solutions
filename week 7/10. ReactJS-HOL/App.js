import React from 'react';

function App() {
  const office = {
    name: "Elite Co-Work Hub",
    rent: 55000,
    address: "123, MG Road, Bengaluru"
  };

  
  const officeSpaces = [
    { name: "Innovatech Solutions", rent: 45000, address: " MG Road, Bengaluru, Karnataka" },
    { name: "Nexus Corporate Hub", rent: 38000, address: "Lotus Plaza, Nehru Nagar, Delhi " },
    { name: "Urban Office", rent: 90000, address: "Indiranagar, Bengaluru" },
    { name: "Prime Workspace", rent: 60000, address: "Marine Drive, Mumbai, Maharashtra" }
  ];

 
  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px'
  };

  const imageStyle = {
    width: '400px',
    height: '250px',
    objectFit: 'cover',
    marginBottom: '20px'
  };

  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold'
  });

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={headingStyle}>Office Space Rental App</h1>
      <img
        style={imageStyle}
        src="https://static.toiimg.com/thumb/msid-113926866,imgsize-62740,width-400,resizemode-4/113926866.jpg"
        alt="Office Space"
      />

     
      <h2>Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong>Address:</strong> {office.address}</p>
      <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>₹{office.rent}</span></p>

     
      <h2>All Available Spaces</h2>
      {officeSpaces.map((space, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <p><strong>Name:</strong> {space.name}</p>
          <p><strong>Address:</strong> {space.address}</p>
          <p><strong>Rent:</strong> <span style={getRentStyle(space.rent)}>₹{space.rent}</span></p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;