import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceIcon } from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToogleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToogleMenu}>
        <img src={menuImg} alt='Abrir e fechar menu' />
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to={'./'}>
              <BurgerIcon />
              <span>Hanbúrgers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'./pizzas'}>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'./bebidas'}>
              <SodaIcon />
              <span>Bebidas</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'./sorvetes'}>
              <IceIcon />
              <span>Sorvetes</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
