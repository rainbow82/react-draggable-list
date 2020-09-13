import React, {useState} from 'react';

const QUESTIONS = [
  'What is your favorite color?',
  'Is Neflix better than Disney+?',
  'Does pineapple belong on pizza?',
  'Pajama pants or yoga pants?',
  'Snow or the beach?',
]

const initialDragAndDropState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []
}


const QuestionList = () => {

  const [dragAndDrop, setDragAndDrop] = useState( initialDragAndDropState );
  const [list, setList] = useState( QUESTIONS );

  const onDragStart = (event) =>{

    const initialPosition = Number(event.currentTarget.dataset.position);

    setDragAndDrop({
      // spread the previous content so properties not being updated don't get overridden
      ...dragAndDrop,

      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list
    });


    //higligh the item being dragged
    event.currentTarget.style.backgroundColor = '#F9F28D';
    event.currentTarget.style.border = '5px, solid, gray';
    event.currentTarget.style.color = '#565654'

    // needed for firefox
    event.dataTransfer.setData("text/html", '');

  }

  const onDragOver = (event) => {
    event.preventDefault();
    // new list to update
    let newList = dragAndDrop.originalOrder;

    // index of the item being dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // index of the drop area being hovered
    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];

    // filter out the item being dragged
    const remainingItems = newList.filter((item, index) => index !== draggedFrom);

    // update the list
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo)
    ];

    if (draggedTo !== dragAndDrop.draggedTo){
      setDragAndDrop({
      ...dragAndDrop,

        // save the updated list state
        updatedOrder: newList,
        draggedTo: draggedTo
      })
    }

    //undo the highlight colors
      event
      .currentTarget
      .style
      .backgroundColor = 'lavender';

  }

  const onDrop = () => {

    setList(dragAndDrop.updatedOrder);

    // and reset the state of the drag and drop
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false
    });

  }

  return (
    <div>
      <h3>Click an item to drag it to a new spot</h3>
      <div className='question-container'>
        {list.map((item, index) => {
          return(
          <p className="question"
            key={index}
            draggable="true"
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            data-position={index}
          >{item}</p>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionList