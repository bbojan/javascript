import { GlobalActionType } from './GlobalActions'
import { GlobalState } from './GlobalState'
import { User } from './models'

export const GlobalReducer = (
  state: GlobalState,
  action: GlobalActionType
): GlobalState => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload as User],
      }
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(
          user => user.id !== (action.payload as User).id
        ),
      }
    default:
      return state
  }
}
