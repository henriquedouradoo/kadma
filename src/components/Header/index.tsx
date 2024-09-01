import './styles.css';

export function Header() {
    return (
        <div className="header-container">
            <div className="logo">
            <h3>KA<span>D</span>MA<span>.</span></h3>
            </div>
            <ul>
                <li>Login</li>
                <li>Registro</li>
                <li>Preços</li>
                <li>FAQ</li>
            </ul>
        </div>
    )
}