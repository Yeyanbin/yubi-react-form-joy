import React, { useRef } from 'react'

function MyComponent() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)

  const handleClick: React.MouseEventHandler<HTMLDivElement> = event => {
    console.log(`Event target: ${event.currentTarget.id}`)
    event.stopPropagation()
  }

  return (
    <div id="outer" ref={outerRef} onClickCapture={handleClick}>
      <div id="inner" ref={innerRef} onClickCapture={handleClick}>
        Click me!
      </div>
    </div>
  )
}

export default MyComponent
