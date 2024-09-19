import { Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Registro } from './Pages/Registro';
import { Pricing } from './Pages/Pricing';
import { Suporte } from './Pages/Suporte';
import { Home } from './Pages/Home';
import { DefaultLayout } from './layout/DefaultLayout';
import Clerk from './Pages/Clerk';
import { Dashboard } from './Pages/Dashboard';

export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />

                <Route path='/login' element={<Clerk />} />
                <Route path='/dashboard' element={<Dashboard />}/>
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/suporte' element={<Suporte />} />
            </Route>
        </Routes>
    );
}
