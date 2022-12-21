import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'

const Pizzas = () => {
  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Calabresa',
      description: 'Artesanal delicioso',
      price: 39.9,
      image: 'https://i.imgur.com/VUEGlFp.jpeg',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Duplo Sabor',
      description: 'Artesanal delicioso com muito bacon',
      price: 59.9,
      image: 'https://i.imgur.com/oeyw89U.jpeg',
    },
  ]
  return (
    <>
      <Head title='Pizzas' description='Os melhores sabores de pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
export default Pizzas
