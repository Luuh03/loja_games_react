import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListGames from './components/games/listgames/ListGames'
import ListCategories from './components/categories/listcategories/ListCategories'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/produtos' element={<ListGames />} />
            <Route path='/categorias' element={<ListCategories />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
