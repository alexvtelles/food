import { useEffect, useState } from 'react'
import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'
import { getPizzas } from '../../services/api'

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    ;(async () => {
      const pizzasRequest = await getPizzas()

      setPizzas(pizzasRequest.data)
    })()
  })

  return (
    <>
      <Head title='Pizzas' description='Os melhores sabores de pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
export default Pizzas
