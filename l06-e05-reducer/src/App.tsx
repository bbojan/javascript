import React from 'react'
import './App.css'

export interface IState {
  name: string
  text: string
}

export type IAction = {
  type: ActionNames
  payload: any
}

export type ActionNames = 'UPDATE_NAME' | 'UPDATE_TEXT'

export const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(
    (state: IState, action: IAction) => {
      switch (action.type) {
        case 'UPDATE_NAME':
          return {
            ...state,
            name: action.payload as string,
          }
        case 'UPDATE_TEXT':
          return {
            ...state,
            text: action.payload as string,
          }
        default:
          return state
      }
    },
    { name: '', text: '' }
  )

  return (
    <div className="App">
      <div>
        <div>NAME</div>
        <input
          value={state.name}
          onChange={e =>
            dispatch({ type: 'UPDATE_NAME', payload: e.target.value })
          }
        />
      </div>
      <div>
        <div>NAME</div>
        <NameHComponent name={state.name} />
        <div>NAME</div>
      </div>
      <div>
        <div>TEXT</div>
        <input
          value={state.text}
          onChange={e =>
            dispatch({ type: 'UPDATE_TEXT', payload: e.target.value })
          }
        />
      </div>
      <div>
        <div>TEXT</div>
        <TextHComponent text={state.text} />
        <div>TEXT</div>
      </div>
    </div>
  )
}

//////////////////////////////////////////

interface NameProps {
  name: string
}
interface TextProps {
  text: string
}

const NameHComponent = React.memo<NameProps>(
  ({ name }) => {
    console.log('rendering NAME')
    return <h3>{name}</h3>
  },
  (prev, curr) => prev.name === curr.name
)

const TextHComponent = ({ text }: TextProps) => {
  console.log('rendering TEXT')
  return <h3>{text}</h3>
}

//////////////////////////////////////////
