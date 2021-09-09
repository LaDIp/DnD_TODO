import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Draggable } from 'react-beautiful-dnd'
import style from './Card.module.css'
import { DELETE_CARD } from '../const'

function Card({ item, columnId, index }) {
  const dispatch = useDispatch()

  const deleteCard = () => {
    dispatch({
      type: DELETE_CARD,
      payload: { columnId: columnId, cardId: item.id },
    })
  }

  return (
    <Draggable draggableId={item.id} index={index}>
      {provided => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={style.card}
          id={item.id}>
          <p>{item.text}</p>
          <button className={style.button} onClick={deleteCard}>
            X
          </button>
        </li>
      )}
    </Draggable>
  )
}

export default Card
