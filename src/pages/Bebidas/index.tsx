import { useEffect, useState } from 'react'
import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'
import { getBebidas } from '../../services/api'

const Bebidas = () => {
  const [bebidas, setBebidas] = useState([])

  useEffect(() => {
    ;(async () => {
      const bebidasRequest = await getBebidas()

      setBebidas(bebidasRequest.data)
    })()
  })

  return (
    <>
      <Head title='Bebidas' description='Os melhores drinks' />
      <SnackTitle>Bebidas</SnackTitle>
      <Snacks snacks={bebidas}></Snacks>
    </>
  )
}

export default Bebidas
