import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar as NavbarStyled} from '../../Styles'

const Navbar = () => {
  return (
    <NavbarStyled>
        <Link to="/home">Home</Link>
        <Link to="/super-heroes">Superheroes</Link>
        <Link to="/rq-super-heroes">RQ Superheroes</Link>
        <Link to="/rq-parallel">RQ Parallel</Link>
        <Link to="/rq-dynamic-parallel">RQ Dynamic</Link>
        <Link to="/rq-dependent">RQ Dependent</Link>
        <Link to="/rq-paginated">RQ Pagination</Link>
        <Link to="/rq-infinite">RQ Infinite</Link>
    </NavbarStyled>
  )
}

export default Navbar