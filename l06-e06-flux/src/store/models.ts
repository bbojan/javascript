let _uid = 0
export function newUID() {
  _uid++
  return _uid
}

export interface User {
  name: string
  id: number
}

export const newUser = (name: string): User => ({ name, id: newUID() })
