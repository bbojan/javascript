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

export function useMember<T>(initialValue: T): [() => T, (value: T) => void] {
  const refMember = React.useRef<T>(initialValue)
  return [() => refMember.current, (value: T) => (refMember.current = value)]
}

export const useDrawSizeOnWindowTitle = (): Size => {
  const [getSize, setSize] = useMember<Size>({
    w: window.innerWidth,
    h: window.innerHeight,
  })

  const drawTitle = (size: Size) => {
    window.document.title = `   Width:  ${size.w}   |   Height:  ${size.h}   `
  }

  useOnWindowSizeChanged((size: { w: number; h: number }) => {
    setSize(size)
    drawTitle(size)
    console.log(size)
  })

  React.useEffect(() => {
    const size = getSize()
    drawTitle(size)
  }, [getSize])

  return getSize()
}
