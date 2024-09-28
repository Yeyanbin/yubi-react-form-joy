import React, { useRef } from 'react'

function MyComponent() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)

  const handleClick: React.MouseEventHandler<HTMLDivElement> = event => {
    console.log(`Event target: ${event.currentTarget.id}`)
    event.stopPropagation()
  }

  /* 标记，此处为用户自己编写 */


  /* 标记结束 */

  // 组件A：产品来写下这个事件要做啥，
  const attr = {
    /* 标记，此处为用户自己编写 */
    onchange: () => {
      console.log('test')
    },
    style: {
      height: '800px',
    },
    className: 'opPage__wrap'
    /* 标记结束 */
  }

  return (
    <div id="outer" ref={outerRef} onClickCapture={handleClick} {...attr}>
      <div id="inner" ref={innerRef} onClickCapture={handleClick}>
        Click me!
      </div>
    </div>
  )
}

export default MyComponent
