import './styles.css'

export function FormLogin() {
    return (
        <div className="forms">
            <input className='input-text' type="email" placeholder="   Email" required />
            <br />
            <input className='input-text' type="password" placeholder="   Senha" required />
            <br />
            <button>
                LOGIN
            </button>

            
        </div>
    )
}