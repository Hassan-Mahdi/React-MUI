import * as React from 'react';
import './App.css'
import { Container } from '@mui/material';
import FinalAcordion from './components/FinalAcordion';
import SetGoal from './components/SetGoal';



function App() {
  
  return (
    <div className='App'>

        <Container className='App-container'>
          <h1>Acordion</h1>
          <FinalAcordion/>
        </Container>
        
        <Container className='Set-goal-container'>
          <h1>Set Goal</h1>
          <SetGoal/>
        </Container>

    </div>
  );
}

export default App;