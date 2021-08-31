import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import style from './Card.module.css'

function Card({item, columnId, index}){
  return (
    <Draggable draggableId={item.id} index={index}>
      {provided=>(
        <li 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={style.card} 
          id={item.id}
        >
          {item.text}
        </li>
      )}
    </Draggable>
  )
}


export default Card;


