import React, {useState} from 'react';
import Question from './Question'

const QuestionInput = () => {
  // const QUESTIONS = [
  //   'What is your favorite color?',
  //   'Is Neflix better than Disney+?',
  //   'Does pineapple belong on pizza?',
  //   'Pajama pants or yoga pants?',
  //   'Snow or the beach?',
  // ]

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = () => {
    // event.preventDefault();
    setItems([...items, itemName]);
    setItemName("");
    console.log(items);
  };


  return(
    <div>
    <form onSubmit={ (event) => {
      event.preventDefault();
      addItem();
    }}>
      <label htmlFor="itemName" className="form-label">
        Enter your question
        <input className="form-text-area"
          question="item"
          type="text"
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        />
      </label>
    </form>
    <Question items={items}/>
    </div>
  )

}

export default QuestionInput;