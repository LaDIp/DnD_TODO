import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARD } from '../const';

import style from './CardForm.module.css'


function CardForm({columnID}){
  const dispatch = useDispatch()
  const board = useSelector(state => state.board)

  const [formVisible, setFormVisible] = useState(false)
  const [cardText, setCardText] = useState('')
  
  const formShow = () => {
    setFormVisible(true)
  }

  const editCard = ({target: {value}}) => {
    setCardText(value)
  }

  const exitEdit = ({target: {value}}) => {
    setCardText('')
    setFormVisible(false)
  }

  const addCard = () => {
    setFormVisible(false)
    setCardText('')
    if (cardText == '')
      return
    const card = {
        id: `card-${Date.now()}`,
        text: cardText
      }
    dispatch({type: ADD_CARD, payload: {id: columnID, card: card}})
  }

  return (
    <>
    {formVisible ?
    <div className={style.wrapper}>
      <textarea 
        className={style.inputCard} 
        type="text" 
        placeholder='Введите название карточки' 
        value = {cardText}
        onChange = {editCard}
        />
      <button className={style.addCard} onClick={addCard}>Добавить карточку</button>
      <button className={style.exitCard} onClick={exitEdit}>X</button>
    </div>
    :
    <button className={style.createCard} onClick={formShow}>+ Добавить карточку</button>
    }
    </>
  )
}


export default CardForm;


