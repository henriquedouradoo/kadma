import './styles.css'

export function Pricing() {
    return(
        <div className='container-pricing'>
            <div className="content-text">
                <h2>PRICING - KADMA.</h2>
                <p>Abaixo nossa tabela de preços sobre nossos serviços:</p>
            </div>
            <div className="cards-container-01">
                <div className="card-01">

                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8 0H9.2V5.94731L4.99462 1.74193L1.74193 4.99461L5.94732 9.2H0V13.8H5.94731L1.74193 18.0053L4.99462 21.2581L9.2 17.0527V23H13.8V17.0527L18.0054 21.2581L21.2581 18.0054L17.0527 13.8H23V9.2H17.0527L21.2581 4.99461L18.0054 1.74192L13.8 5.94731V0Z" fill="black"/>
                </svg>

                <h4>Business Pack</h4>
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                <h1>R$ 479</h1>
                <span>Por mês</span>
                <button>Adquirir agora → </button>
                </div>
            </div>

            <div className="cards-container-02">
            <div className="card-02">
                    
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8 0H9.2V5.94731L4.99462 1.74193L1.74193 4.99461L5.94732 9.2H0V13.8H5.94731L1.74193 18.0053L4.99462 21.2581L9.2 17.0527V23H13.8V17.0527L18.0054 21.2581L21.2581 18.0054L17.0527 13.8H23V9.2H17.0527L21.2581 4.99461L18.0054 1.74192L13.8 5.94731V0Z" fill="black"/>
                </svg>

                <h4>Enterprise Pack</h4>
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                <h1>R$ 979</h1>
                <span>Por Mês</span>
                <button>Adquirir agora →</button>
                </div>
                </div>

                <div className="cards-container-03">
            <div className="card-03">
                    
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8 0H9.2V5.94731L4.99462 1.74193L1.74193 4.99461L5.94732 9.2H0V13.8H5.94731L1.74193 18.0053L4.99462 21.2581L9.2 17.0527V23H13.8V17.0527L18.0054 21.2581L21.2581 18.0054L17.0527 13.8H23V9.2H17.0527L21.2581 4.99461L18.0054 1.74192L13.8 5.94731V0Z" fill="white"/>
            </svg>


                <h4>Ultimate Pack</h4>
                <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</p>
                <h1>R$ 1479</h1>
                <span>Por Mês</span>
                <button>Adquirir agora →</button>
                </div>
                </div>
        </div>

        
    )
}