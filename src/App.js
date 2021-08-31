import React from 'react';
import style from './App.module.css';
import Column from './Column/Column';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import {
  ADD_COLUMN,
  REORDER_CARDS
} from './const'



function App() {
  const dispatch = useDispatch()
  const board = useSelector(state => state)

  const addColumn = () => {
    const column = { 
      id: `column-${Date.now()}`,
      title: '',
      list: []
    }
    dispatch({type: ADD_COLUMN, payload: column})
  }
  
  const onDragEnd = ({source, destination}) =>{
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    dispatch({type: REORDER_CARDS, payload: 
      {
        sourceColumn: source.droppableId, 
        sourceIndex: source.index, 
        destinationColumn: destination.droppableId,
        destinationIndex: destination.index
      }
    })
  }

  return (
    <div className={style.board}>
      <DragDropContext onDragEnd={onDragEnd}>
        {board.map(column =>
          <Column
            key={column.id} 
            column={column}
          />
        )}
      </DragDropContext>
      <button className={style.addButton} onClick={addColumn}>+ Добавить колонку</button>
    </div>
  );
}

export default App;
