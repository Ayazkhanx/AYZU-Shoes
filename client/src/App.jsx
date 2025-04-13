import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/auth/authLayout'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import AdminLayout from './components/admin-view/AdminLayout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminProducts from './pages/admin-view/products'
import AdminFeature from './pages/admin-view/feature'
import AdminOrder from './pages/admin-view/order'
import ShoppingLayout from './components/shopping-view/ShoppingLayout'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingListings from './pages/shopping-view/listings'
import NotFound from './pages/NotFound'
import UnAuth from './pages/unauth-page'
import CheckAuth from './components/common/CheckAuth'



function App() {
const isAuthenticated = false;
const user = null

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      
      <Routes>
        <Route path='/' element={<ShoppingLayout />} />

        
        <Route path='/auth' element={ <CheckAuth isAuthenticated={isAuthenticated} user={user} ><AuthLayout /></CheckAuth> } >
        <Route path='login' element={<Login /> } />
        <Route path='register' element={<Register />} />
      </Route>

      <Route path='/admin' element={ <CheckAuth isAuthenticated={isAuthenticated}user={user} ><AdminLayout /></CheckAuth> } >
      <Route path='dashboard' element={<AdminDashboard />} />
      <Route path='products' element={<AdminProducts />} />
      <Route path='features' element={<AdminFeature />} />
      <Route path='orders' element={<AdminOrder />} />
      </Route>

      <Route path='/shop' element={ <CheckAuth isAuthenticated={isAuthenticated} user={user} ><ShoppingLayout /></CheckAuth>  }>
      <Route path='home' element={<ShoppingHome />} />
      <Route path='account' element={<ShoppingAccount />} />
      <Route path='checkout' element={<ShoppingCheckout />} />
      <Route path='listings' element={<ShoppingListings />} />
      </Route>

      <Route path='*' element={<NotFound />} />
      <Route path='/unauth-page' element={<UnAuth /> } />

      </Routes>
    </div>
  )
}

export default App
