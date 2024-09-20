import { Routes, Route } from 'react-router-dom';
import { Pricing } from './Pages/Pricing';
import { Home } from './Pages/Home';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './Pages/Dashboard';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Clerk from './components/Clerk';


export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />

                <Route path='/' element={<Clerk />} />

                <Route path='/pricing' element={<Pricing />} />
            </Route>
            <Route path='/dashboard' element={
                <>

                <SignedIn>
                <Dashboard />
                </SignedIn>

                <SignedOut>
                <RedirectToSignIn />
                </SignedOut>
                </>}/>
        </Routes>
    );
}
