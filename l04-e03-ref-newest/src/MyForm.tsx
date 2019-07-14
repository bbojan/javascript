import React from 'react'

export interface MyFormProps {}

export interface BadApi {
  badImperativeApiGetText: () => string
}

const MyFormImpl: React.FC<MyFormProps> = (
  props: MyFormProps,
  ref: React.RefObject<BadApi>
) => {
  const _inputRef1 = React.useRef<HTMLInputElement>(null)
  const _inputRef2 = React.useRef<HTMLInputElement>(null)

  const [textareavalue, set_textareavalue] = React.useState('')

  const _timerIDRef = React.useRef(0)

  React.useEffect(() => {
    _inputRef1.current && _inputRef1.current.focus()

    _timerIDRef.current = window.setTimeout(() => {
      _inputRef2.current && _inputRef2.current.focus()
    }, 2000)

    return () => {
      window.clearTimeout(_timerIDRef.current)
    }
  }, [])

  React.useImperativeHandle(ref, () => {
    return {
      badImperativeApiGetText: () => {
        const text1 = _inputRef1.current && _inputRef1.current.value
        return text1 || ''
      },
    } as BadApi
  })

  const onSave = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    const text1 = _inputRef1.current ? _inputRef1.current.value : ''
    const text2 = _inputRef2.current ? _inputRef2.current.value : ''

    const text = `${text1} | ${text2}`
    set_textareavalue(text)
  }

  return (
    <form>
      <div>
        <input ref={_inputRef1} />
      </div>
      <div>
        <input ref={_inputRef2} />
      </div>
      <div>
        <button onClick={onSave}>Save</button>
      </div>
      <div>{textareavalue && <textarea value={textareavalue || ''} />}</div>
    </form>
  )
}

export const MyForm = React.forwardRef(MyFormImpl)
