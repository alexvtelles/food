import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Burgers'
import PizzasPage from './pages/Pizzas'
import BebidasPages from './pages/Bebidas'
import SorvetesPage from './pages/Sorvetes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='/pizzas' element={<PizzasPage />} />
        <Route path='/bebidas' element={<BebidasPages />} />
        <Route path='/sorvetes' element={<SorvetesPage />} />
      </Route>
    </Routes>
  )
}
