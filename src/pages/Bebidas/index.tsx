import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'

const Bebidas = () => {
  const data = [
    {
      id: 1,
      snack: 'bebidas',
      name: 'Lindo',
      description: 'Artesanal delicioso',
      price: 39.9,
      image: 'https://i.imgur.com/WmH9iuK.jpeg',
    },
    {
      id: 2,
      snack: 'bebidas',
      name: 'Refrigerante',
      description: 'Artesanal delicioso com muito bacon',
      price: 9.9,
      image: 'https://i.imgur.com/KdrzQIi.jpeg',
    },
    {
      id: 3,
      snack: 'bebidas',
      name: 'cerveja',
      description: 'Artesanal delicioso com muito bacon',
      price: 9.9,
      image: 'https://i.imgur.com/dj4Pzow.jpeg',
    },
  ]
  return (
    <>
      <Head title='Bebidas' description='Os melhores drinks' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}

export default Bebidas
