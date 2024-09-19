import './styles.css';
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div className="header-container">
            <div className="logo">
            <h3>KA<span>D</span>MA<span>.</span></h3>
            </div>
            <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/test'><li>test</li></Link>
        <Link to='/login'><li>Login</li></Link>
        <Link to='/register'><li>Registro</li></Link>
        <Link to='/pricing'><li>Pricing</li></Link>
        <Link to='/suporte'><li>Suporte</li></Link>
            </ul>
        </div>
    )
}