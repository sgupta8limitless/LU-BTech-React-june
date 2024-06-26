import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import CreateProduct from './pages/create-product/CreateProduct'
import Products from './pages/products/Products'
import NotFound from './pages/not-found/NotFound'
import UpdateProduct from './pages/update-product/UpdateProduct'

function App() {


  return (
    <>

          <BrowserRouter>

              <Routes>
                  <Route path='' element={<Products/>}/>
                  <Route path="/products" element={<Products/>}/>
                  <Route path="/create" element={<CreateProduct/>}/>
                  <Route path='/update/:id' element={<UpdateProduct/>}/>
                  <Route path='*' element={<NotFound/>}/>
              </Routes>
          
          </BrowserRouter>


    </>
  )
}

export default App
