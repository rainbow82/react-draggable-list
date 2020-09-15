import React, {useState, useEffect} from 'react'

const initialDragAndDropState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []
}

const QuestionList = ({ items }) => {

  const [dragAndDrop, setDragAndDrop] = useState( initialDragAndDropState );
  const [list, setList] = useState( items );

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
      event.currentTarget.style.backgroundColor = 'white';
      event.currentTarget.style.color = 'purple'

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

  useEffect(() => {
    setList(items);
  }, [items]);


  return(
  <div className="c-QuestionList">
    <h2>Questions List: </h2>
    <div className='c-QuestionList-container'>
      {items.length === 0 ? (
        <h4>No Questions Found</h4>
      ) : (
        list.map((item, index) => (
        <p className='c-QuestionList-question'
        key={index}
        draggable="true"
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        data-position={index}
        >
          {item}</p>
        ))
      )}
    </div>
    <p>The items stored in state will update as they are reordered above</p>
    <p>
      <span className='c-QuestionList-state'>State:</span>
      <span className='c-QuestionList-array'>{items.length !== 0 ? `"${list}",  `: "There are no questions currently stored in state. Please enter a question"}</span>
    </p>
  </div>
  )

}

export default QuestionList;