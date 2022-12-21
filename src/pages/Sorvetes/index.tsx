import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'

const Sorvetes = () => {
  const data = [
    {
      id: 1,
      snack: 'doces',
      name: 'Torta Gelada',
      description: 'Artesanal delicioso',
      price: 39.9,
      image: 'https://i.imgur.com/OV151XB.jpeg',
    },
    {
      id: 2,
      snack: 'doces',
      name: 'Delicia Gelada',
      description: 'Artesanal delicioso com muito bacon',
      price: 59.9,
      image: 'https://i.imgur.com/r7NC5On.jpeg',
    },
    {
      id: 3,
      snack: 'doces',
      name: 'Açai com frutas',
      description: 'Artesanal delicioso com muito bacon',
      price: 59.9,
      image: 'https://i.imgur.com/gPu7DH2.jpeg',
    },
  ]

  return (
    <>
      <Head title='Doces' description='Os mais deliciosos doces' />
      <SnackTitle>Doces</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}

export default Sorvetes
