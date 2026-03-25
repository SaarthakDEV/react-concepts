import React from 'react'
import NestedTwo from './NestedTwo'

const NestedOne = () => {
  return (
    <div>NestedOne
        <NestedTwo />
    </div>
  )
}

export default NestedOne