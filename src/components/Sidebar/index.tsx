import { Container } from './styles'
import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'
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
        </ul>
      </nav>
    </Container>
  )
}

export default Sidebar
