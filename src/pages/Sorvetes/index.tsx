import { useEffect, useState } from 'react'
import { Head } from '../../components/Head'
import { SnackTitle } from '../../components/SnackTitle'
import { Snacks } from '../../components/Snacks'
import { getDoces } from '../../services/api'

const Sorvetes = () => {
  const [doces, setDoces] = useState([])

  useEffect(() => {
    ;(async () => {
      const docesRequest = await getDoces()

      setDoces(docesRequest.data)
    })()
  })

  return (
    <>
      <Head title='Doces' description='Os mais deliciosos doces' />
      <SnackTitle>Doces</SnackTitle>
      <Snacks snacks={doces}></Snacks>
    </>
  )
}

export default Sorvetes
