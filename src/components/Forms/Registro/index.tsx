import './styles.css'

export function RegistroForm() {
    return (
        <div className="forms">
            <input className='input-text' type="email" placeholder="   Email" required />
            <br />
            <input className='input-text' type="text" placeholder="   Username" required />
            <br />
            <input className='input-text' type="text" placeholder="   Empresa" required />
            <br />
            <input className='input-text' type="password" placeholder="   Senha" required />
            <br />
            <button>
                REGISTRAR ACESSO
            </button>

        </div>
    )
}