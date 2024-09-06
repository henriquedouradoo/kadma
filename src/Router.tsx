import { Routes, Route } from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { DefaultLayout } from './layout/DefaultLayout'
import { Registro } from './Pages/Registro'
import { Pricing } from './Pages/Pricing'
import { Suporte } from './Pages/Suporte'
import { Home } from './Pages/Home/Home'


export function Router() {
    return(
        <Routes>
           <Route path="/" element={<DefaultLayout />} />
           <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Registro />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/suporte' element={<Suporte />} />
        </Routes>
    )
}