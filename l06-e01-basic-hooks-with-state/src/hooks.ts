import React from 'react'

export type Size = { w: number; h: number }
export type ResizeHandler = (size: Size) => void

export const useOnWindowSizeChanged = (
  onResize: ResizeHandler = (size: Size) => {}
) => {
  React.useEffect(() => {
    const listener = () => {
      onResize({ w: window.innerWidth, h: window.innerHeight })
    }

    window.addEventListener('resize', listener, true)
    return () => {
      window.removeEventListener('resize', listener, true)
    }
  }, [onResize])
}

export const useDrawSize = (): Size => {
  const [size, setSize] = React.useState<Size>({
    w: window.innerWidth,
    h: window.innerHeight,
  })

  const drawTitle = (size: Size) => {
    window.document.title = `   Width:  ${size.w}   |   Height:  ${size.h}   `
  }

  useOnWindowSizeChanged((size: { w: number; h: number }) => {
    setSize(size)
    console.log(size)
  })

  React.useEffect(() => {
    drawTitle(size)
  }) //on every render

  return size
}
