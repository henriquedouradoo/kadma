import { SignedIn, UserButton } from '@clerk/clerk-react';
import './styles.css';
import { Link } from 'react-router-dom';

export function HeaderDashboard() {
    return (
        <div className="header-container">
            <div className="logo">
            <Link to='/'><h3>KA<span>D</span>MA<span>.</span></h3></Link>
            </div>
            <ul>
            <SignedIn>
                <div className="user-btn">
                <UserButton />
                </div>
            <UserButton />
            </SignedIn>
            </ul>
        </div>
        
    )
}