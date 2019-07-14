import React, { MouseEvent } from 'react'

export interface MyFormProps {}

export interface MyFormState {
  textareavalue?: string
}

export class MyFormClass extends React.Component<MyFormProps, MyFormState> {
  private _inputRef1: HTMLInputElement | null
  private _inputRef2: React.RefObject<HTMLInputElement>

  private _timerID = 0

  constructor(props: MyFormState) {
    super(props)

    this.state = { textareavalue: '' }

    this._inputRef1 = null
    this._inputRef2 = React.createRef<HTMLInputElement>()

    this.onSave = this.onSave.bind(this)
  }

  componentDidMount(): void {
    this._inputRef1 && this._inputRef1.focus()

    this._timerID = window.setTimeout(() => {
      this._inputRef2 &&
        this._inputRef2.current &&
        this._inputRef2.current.focus()
    }, 2000)
  }

  componentWillUnmount(): void {
    window.clearTimeout(this._timerID)
  }

  onSave(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    e.stopPropagation()

    const text1 = this._inputRef1 ? this._inputRef1.value : ''
    const text2 = this._inputRef2.current ? this._inputRef2.current.value : ''

    this.setState({ textareavalue: `${text1} | ${text2}` })
  }

  render() {
    return (
      <form>
        <div>
          <input ref={r => (this._inputRef1 = r)} />
        </div>
        <div>
          <input ref={this._inputRef2} />
        </div>
        <div>
          <button onClick={this.onSave}>Save</button>
        </div>
        <div>
          {this.state.textareavalue && (
            <textarea value={this.state.textareavalue || ''} />
          )}
        </div>
      </form>
    )
  }
}
