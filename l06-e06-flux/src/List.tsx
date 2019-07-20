import React from 'react'
import { User } from './store/models'

export interface ListProps {
  users: User[]
  onDelete?: (user: User) => void
}

export const List: React.FC<ListProps> = props => {
  return (
    <div className="App">
      {props.users.map(user => (
        <div key={user.id}>
          <span style={{ fontSize: 20 }}>{user.name}</span>
          <span style={{ marginLeft: 20 }}>
            {props.onDelete && (
              <button onClick={() => props.onDelete && props.onDelete(user)}>
                X
              </button>
            )}
          </span>
          <span>{' ID ' + user.id}</span>
        </div>
      ))}
    </div>
  )
}
