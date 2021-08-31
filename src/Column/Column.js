import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card'
import CardForm from '../CardForm/CardForm'
import { useDispatch, useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import style from './Column.module.css'
import { SET_TITLE, DELETE_COLUMN } from '../const';


function Column({column}){
  const dispatch = useDispatch()
  
  const [columnTitle, setColumnTitle] = useState(column.title)

  const editTitle = ({target: {value}}) => {
    setColumnTitle(value)
  }

  const setTitle = () => {
    column.title = columnTitle
    dispatch({type: SET_TITLE, payload: {column}})
  }

  const deleteColumn = () => {
    dispatch({type: DELETE_COLUMN, payload: column.id})
  }


  return (
    <div className={style.wrapper}>
      <textarea 
        className={style.titleColumn}
        type="text" 
        placeholder='Введите название карточки' 
        value = {columnTitle}
        onChange = {editTitle}
        onBlur={setTitle}
        rows={1}
        />
      <button className={style.deleteColumn} onClick={deleteColumn}>X</button>
      <Droppable type="COLUMN" droppableId={column.id}>
        {provided=>(
          <ul 
            ref={provided.innerRef} 
            {...provided.droppableProps}
            className={style.column}
          >
            {column.list.map((item, index) =>
              <Card
                key={item.id}
                columnId={column.id}
                item={item}
                index={index}/>
            )}
          {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <CardForm columnID={column.id}/>
    </div>
  )
}


export default Column;


