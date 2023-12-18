import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { Defaultlayout } from './layouts/DefaultLayout'

// ele vai colocar esses layouts pra todos com o path

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
