import React, { useState } from 'react';
import './App.css';
import { convertTextTo10 } from './utils';

function App() {
  const [text, setText] = useState('');
  const binaryText = convertTextTo10(text);
  return (
    <div className="App">
      <textarea
        onChange={(e) => {
          const { value } = e.target;
          setText(value);
        }}
      />
      <div className="binaryTextArea">{binaryText}</div>
    </div>
  );
}

export default App;
