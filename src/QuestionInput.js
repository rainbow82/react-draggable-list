import React from 'react';

const QuestionInput = () => {
  return(
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
    <label htmlFor="location" className="form-label">
      Enter your question
      <textarea className="form-text-area"
      />
    </label>
    <button>Submit</button>
  </form>
  )

}

export default QuestionInput;