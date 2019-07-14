import React from 'react'

export type MousePosition = {
  x: number
  y: number
}

export type MousePositionProps = {
  mousePosition: MousePosition
}

export function withMousePosition<Props>(
  Component: React.ComponentType<Props>
): React.FC<Props> {
  return (props: Props) => {
    const [mousePosition, setMousePosition] = React.useState<MousePosition>({
      x: 0,
      y: 0,
    })
    React.useEffect(() => {
      const onMouseMove = (ev: MouseEvent) => {
        setMousePosition({ x: ev.pageX, y: ev.pageY })
      }
      window.addEventListener('mousemove', onMouseMove)
      return () => {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    return (
      <>
        <div key={1}>
          <Component {...props} mousePosition={mousePosition} />
        </div>
        <div key={2}>
          <span>{`x: ${mousePosition.x} | y: ${mousePosition.y} `}</span>
        </div>
      </>
    )
  }
}
