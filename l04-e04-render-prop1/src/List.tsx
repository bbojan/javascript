import React from 'react'

export interface ListProps<T> {
  items: T[]
  measureHeight: (item: T, index: number) => number
  renderItem: (item: T, index: number) => JSX.Element
}

export function List<T>(props: ListProps<T>) {
  return (
    <ul>
      {props.items.map((item, index) => {
        const height = props.measureHeight(item, index)
        return (
          <li
            key={index}
            style={{
              height,
              borderStyle: 'dotted',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {props.renderItem(item, index)}
          </li>
        )
      })}
    </ul>
  )
}
