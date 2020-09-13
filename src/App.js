import React from 'react';
import './App.css';
import QuestionInput from './QuestionInput';
import QuestionList from './QuesitonList';


function App() {
  return (
    <div className='grid-container'>
      <div>
        <QuestionInput/>
      </div>
      <div>
        <QuestionList/>
      </div>

    </div>

  );
}

export default App;
