import { useEffect, useState } from 'react';
import './App.css';

function Clock() {
  const containerStyled = {
    background: '#DBE2EF',
    padding: '2rem',
  };
  const spanStyled = {
    display: 'inline-block',
    background: 'white',
    borderRadius: '20%',
    width: '2rem',
    textAlign: 'center',
    margin: '0.2rem',
  };
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

  const formatDate = (date) => {
    const pad = (n) => n.toString().padStart(2, '0');

    const year = String(date.getFullYear()).slice(2);
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    const second = pad(date.getSeconds());

    return `${year}${month}${day}${hour}${minute}${second}`;
  };

  const [curTime, setCurTime] = useState(formatDate(new Date()));
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCurTime(formatDate(new Date()));
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div style={containerStyled}>
      <div>
        <h1>
          {<span style={spanStyled}>{curTime[0]}</span>}
          {<span style={spanStyled}>{curTime[1]}</span>}년{<span style={spanStyled}>{curTime[2]}</span>}
          {<span style={spanStyled}>{curTime[3]}</span>}월{<span style={spanStyled}>{curTime[4]}</span>}
          {<span style={spanStyled}>{curTime[5]}</span>}일{<span style={spanStyled}>{curTime[6]}</span>}
          {<span style={spanStyled}>{curTime[7]}</span>}시{<span style={spanStyled}>{curTime[8]}</span>}
          {<span style={spanStyled}>{curTime[9]}</span>}분{<span style={spanStyled}>{curTime[10]}</span>}
          {<span style={spanStyled}>{curTime[11]}</span>}초
        </h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button style={buttonStyled} onClick={handleToggle}>
          {isRunning ? '타이머 정지' : '타이머 시작'}
        </button>
      </div>
    </div>
  );
}

export default Clock;
