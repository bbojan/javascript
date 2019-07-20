import React from 'react'
import { newUser, User } from './store/models'

export interface FormProps {
  onSave?: (user: User) => void
}

export const Form: React.FC<FormProps> = props => {
  const textProps = useTextInput()
  return (
    <div>
      <input {...textProps} />
      <button
        onClick={() => {
          const user = newUser(textProps.value)
          props.onSave && props.onSave(user)
        }}
      >
        Add
      </button>
    </div>
  )
}

export const useTextInput = (): {
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
} => {
  const [value, setValue] = React.useState('')
  return {
    value,
    onChange: e => {
      setValue(e.target.value)
    },
  }
}
