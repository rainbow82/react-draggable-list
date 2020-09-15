import React, {useState} from 'react';
import QuestionList from './QuestionList'

const QuestionInput = () => {

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = () => {
    if (!itemName) {
      alert('You must enter a question');
    } else {
      // event.preventDefault();
      setItems([...items, itemName]);
      setItemName("");
      console.log(items);
    }
  };

  return(
    <div className='c-QuestionInput c-QuestionInput-grid-container'>
      <div>
        <h1>Question List Generator</h1>
        <p>Enter your questions into the box below.</p>
        <p>Hit <span className='c-QuestionInput-instruction-text'> Enter</span> or <span className='c-QuestionInput-instruction-text'> Click the Submit</span> button to save your question.</p>
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
        <button onClick={ addItem } className='c-QuestionInput-submit'>Submit</button>
      </div>
    <div>
      <QuestionList items={ items }/>
    </div>
    </div>
  )

}

export default QuestionInput;