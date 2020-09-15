import React, {useState} from 'react';
import Question from './Question'

const QuestionInput = () => {

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = () => {
    // event.preventDefault();
    setItems([...items, itemName]);
    setItemName("");
    console.log(items);
  };

  return(
    <div className='c-QuestionInput c-QuestionInput-grid-container'>
      <div>
        <p>Enter your questions into the box below.</p>
        <p>Hit <span className='c-QuestionInput-instruction-text'> Enter</span> or <span className='c-QuestionInput-instruction-text'> Click the Submit </span> button to save your question.</p>
        <form onSubmit={ (event) => {
          event.preventDefault();
          addItem();
        }}>
          <label htmlFor='itemName' className='c-QuestionInput-form-label'>
            <input className='c-QuestionInput-form-text-area'
              question='item'
              type='text'
              value={ itemName }
              onChange={ e => setItemName(e.target.value) }
            />
          </label>
        </form>
        <button onClick={ addItem }>Submit</button>
      </div>
    <div>
      <Question items={ items }/>
    </div>
    </div>
  )

}

export default QuestionInput;