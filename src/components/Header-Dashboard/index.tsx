import { SignedIn, UserButton } from '@clerk/clerk-react';
import './styles.css';

export function HeaderDashboard() {
    return (
        <div className="header-container">
            <div className="logo">
            <h3>KA<span>D</span>MA<span>.</span></h3>
            </div>
            <ul>
            <SignedIn>
            <UserButton />
            </SignedIn>
            </ul>
        </div>
        
    )
}