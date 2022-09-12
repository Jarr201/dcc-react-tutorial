import React, { useState } from 'react';

function App() {
  
  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}])
  
  return (
    <div>
      <h3>Hello World</h3>
    </div>
  );
}

export default App;
