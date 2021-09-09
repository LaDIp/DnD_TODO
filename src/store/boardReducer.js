import {
  defaultState,
  ADD_COLUMN,
  DELETE_COLUMN,
  ADD_CARD,
  SET_TITLE,
  REORDER_CARDS,
  DELETE_CARD,
} from '../const'

export const boardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TITLE:
      return state.map(col => {
        if (col.id === action.payload.id) return action.payload.column
        else return col
      })
    case REORDER_CARDS:
      let source = {}
      let destination = {}
      state.forEach(col => {
        if (action.payload.sourceColumn === col.id) {
          source = col
        }
        if (action.payload.destinationColumn === col.id) {
          destination = col
        }
      })
      const [removed] = source.list.splice(action.payload.sourceIndex, 1)
      destination.list.splice(action.payload.destinationIndex, 0, removed)
      return state.map(col => {
        if (col.id == source.id) return source
        if (col.id == destination.id) return destination
        return col
      })
    case ADD_COLUMN:
      return [...state, action.payload]
    case DELETE_COLUMN:
      return state.filter(col => col.id != action.payload)
    case ADD_CARD:
      return state.map(col => {
        if (col.id == action.payload.id)
          return { ...col, list: [...col.list, action.payload.card] }
        else return col
      })
    case DELETE_CARD:
      console.log(action)
      return state.map(col => {
        if (col.id == action.payload.columnId)
          return {
            ...col,
            list: col.list.filter(item => item.id !== action.payload.cardId),
          }
        else return col
      })
    default:
      return state
  }
}
