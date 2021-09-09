export const defaultState = [
  {
    id: 'column-1',
    title: 'Task#1',
    list: [{ id: 'card-1', text: 'ead group of squamate reptiles' }],
  },
  {
    id: 'column-2',
    title: 'TODO',
    list: [
      {
        id: 'card-2',
        text: 'Lizards are a widespread group of squamate reptiles',
      },
    ],
  },
]

export const ADD_CARD = 'ADD_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const ADD_COLUMN = 'ADD_COLUMN'
export const DELETE_COLUMN = 'DELETE_COLUMN'
export const REORDER_CARDS = 'REORDER_CARDS'
export const SET_TITLE = 'SET_TITLE'
