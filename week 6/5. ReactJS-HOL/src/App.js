import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  return (
    <div style={{ padding: '50px' }}>
      <CohortDetails name="React" status="comleted" mentor="Disha" />
      <CohortDetails name="Java Sprint" status="ongoing" mentor="Ankita" />
    </div>
  );
}

export default App;