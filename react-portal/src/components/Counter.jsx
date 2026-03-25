import { useState } from 'react'
import NestedOne from './NestedOne'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      <NestedOne />
    </button>
  )
}

export default Counter
