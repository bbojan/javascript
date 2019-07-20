import { User } from './models'

export type GlobalActionNames = 'ADD_USER' | 'DELETE_USER'

export type GlobalActionType = {
  type: GlobalActionNames
  payload: any
}

export const addUserAction = (user: User): GlobalActionType => ({
  type: 'ADD_USER',
  payload: user,
})

export const deleteUserAction = (user: User): GlobalActionType => ({
  type: 'DELETE_USER',
  payload: user,
})
