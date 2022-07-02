import './App.scss'
import Navbar from '../components/navbar/Navbar';
import Panel from '../components/Panel/Panel';
import { useRef } from 'react';

function App() {
  const navbar = useRef()

  return (
    <div className="App">
      <Panel></Panel>
      <Panel></Panel>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
