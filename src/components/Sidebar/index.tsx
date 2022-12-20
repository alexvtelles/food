import { Container } from './styles'
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/pizza.svg'
import { ReactComponent as SodaIcon } from '../../assets/soda.svg'
import { ReactComponent as IceIcon } from '../../assets/ice-cream.svg'
import menuImg from '../../assets/menu.svg'

const Sidebar = () => {
  return (
    <Container>
      <button type='button'>
        <img src={menuImg} alt='Abrir e fechar menu' />
      </button>
      <nav>
        <ul>
          <li>
            <a className='active'>
              <BurgerIcon />
              <span>Hanbúrgers</span>
            </a>
          </li>
          <li>
            <a>
              <PizzaIcon />
              <span>Pizzas</span>
            </a>
          </li>
          <li>
            <a>
              <SodaIcon />
              <span>Bebidas</span>
            </a>
          </li>
          <li>
            <a>
              <IceIcon />
              <span>Sorvetes</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
