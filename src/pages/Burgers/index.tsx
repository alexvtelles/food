import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'

const Burgers = () => {
  const data = [
    {
      id: 1,
      snack: 'Burger',
      name: 'Mega',
      description: 'Artesanal delicioso',
      price: 39.9,
      image: 'https://i.imgur.com/R72rW81.jpeg',
    },
    {
      id: 2,
      snack: 'Burger',
      name: 'Extra Bacon',
      description: 'Artesanal delicioso com muito bacon',
      price: 59.9,
      image: 'https://i.imgur.com/DqCaRTl.jpeg',
    },
  ]

  return (
    <>
      <Head title='Hambúrgures' description='Os melhores hambúrgures você encontra aqui!' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}

export default Burgers
