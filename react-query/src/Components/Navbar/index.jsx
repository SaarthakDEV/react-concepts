import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar as NavbarStyled} from '../../Styles'

const Navbar = () => {
  return (
    <NavbarStyled>
        <Link to="/home">Home</Link>
        <Link to="/super-heroes">Superheroes</Link>
        <Link to="/rq-super-heroes">RQ Superheroes</Link>
    </NavbarStyled>
  )
}

export default Navbar