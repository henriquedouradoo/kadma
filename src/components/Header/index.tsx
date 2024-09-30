
import Clerk from '../Clerk';
import './styles.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className="header-container">
            <div className="logo">
            <Link to='/'><h3>KA<span>D</span>MA<span>.</span></h3></Link>
            </div>
            <ul className='navbar'>
        <Link to='/pricing'><li>Pricing</li></Link>
        <div className="clerk">
            <Clerk />
            </div>
            </ul>
        </div>
    )
}