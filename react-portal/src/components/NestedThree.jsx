import React, { useState } from 'react'
import Portal from './Portal'

const NestedThree = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <>
    <div onClick={() => setToggle(!toggle)}>Click</div>
    { toggle && <Portal onClick={() => alert("clicked")}/>}
    </>
  )
}

export default NestedThree