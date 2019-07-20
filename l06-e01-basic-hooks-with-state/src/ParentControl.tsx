import React from 'react'
import { ChildControl } from './ChildControl'

export const ParentControl: React.FC = () => {
  return (
    <div>
      <ChildControl />
      <h4> Should Change on Resize</h4>
    </div>
  )
}
