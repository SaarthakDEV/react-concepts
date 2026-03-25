import React from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ onClick }) => {
  return createPortal(
    <div onClick={onClick}>Portal</div>,
    document.body
  )
}

export default Portal