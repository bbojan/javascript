import React from 'react'
import { Form } from './Form'
import { List } from './List'
import { addUserAction, deleteUserAction } from './store/GlobalActions'
import { useStore } from './store/UseStore'

export const View: React.FC = () => {
  const { globalState, dispatch } = useStore()
  return (
    <div>
      <div>
        <Form
          onSave={user => {
            dispatch(addUserAction(user))
          }}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
        <span style={{ background: 'lime' }}>
          <List
            users={globalState.users}
            onDelete={user => dispatch(deleteUserAction(user))}
          />
        </span>
        <span style={{ background: 'pink' }}>
          <List users={globalState.users.slice().reverse()} />
        </span>
      </div>
    </div>
  )
}
