import React from 'react'

export interface ChildItemProps {
  text: string
  checked: boolean
  onChecked: (checked: boolean) => void
}

export class ChildItem extends React.Component<ChildItemProps> {
  constructor(props: ChildItemProps) {
    super(props)

    this.onChanged = this.onChanged.bind(this)
  }

  private onChanged(e: React.ChangeEvent): void {
    this.props.onChecked((e.target as any).checked)

    /////

    const c0 = (e.target as any).checked
    // e.persist();

    setTimeout(() => {
      console.log(c0)
      console.log((e.target as any).checked)
    }, 10)
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.checked}
          onChange={this.onChanged}
        />
        <span>{this.props.text}</span>
      </div>
    )
  }
}
