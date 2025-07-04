import { useState } from 'react';
import './App.css';
import Clock from './Clock';

const buttonStyled = {
  font: 'inherit',
  background: '#112D4E',
  color: 'white',
  padding: '1rem',
  borderRadius: '1rem',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
};

const buttonContainerStyled = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '5rem',
  marginBottom: '2rem',
};

function App() {
  const [componentRunning, setComponentRunning] = useState(true);

  const handleComponentToggle = () => {
    setComponentRunning(!componentRunning);
  };

  return (
    <>
      <div>
        <div style={buttonContainerStyled}>
          <button style={buttonStyled} onClick={handleComponentToggle}>
            {componentRunning ? '날짜+시간 닫기' : '날짜+시간 보기'}
          </button>
        </div>
        <div style={{ minHeight: '250px' }}>{componentRunning && <Clock />}</div>
      </div>
    </>
  );
}

export default App;
