import React from 'react'

const Question = ({items}) => {
  return(
    <div>
  <div className='question-container'>
      {items.length === 0 ? (
        <h1>No Questions Found</h1>
      ) : (
        items.map((item) => (
        <p>{item}</p>
        ))
      )}
  </div>
  </div>
  )

}

export default Question;