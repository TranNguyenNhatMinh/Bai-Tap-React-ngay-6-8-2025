import logo from './logo.svg';
import './App.css';
import Header from './componet/Header';
import { use, useState } from 'react';
import HW1 from './homework-react/bt-6/8/bt-6-8-2025';

function App() {
  const [count,setCount] = useState(0);
  const [userName,setUserName] = useState('');

  return (
    <div style={{padding: '20px'}}>
      <h1>COMPONET CHA</h1>
      <div>
        <label>Nhap ten: </label>
        <input 
        type='text'
        value={userName}
        onChange ={(e) => setUserName(e.target.value)}
        placeholder='Nhap ten ...'
        />
      </div>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>

      <div>
        <HW1 userName = {userName} count={count}/>
      </div>
    </div>
  );
}

export default App;
