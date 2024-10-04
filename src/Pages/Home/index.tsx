import { Link } from 'react-router-dom';
import './styles.css';
import HomeImg from '../../Assets/home.svg';

import LogoImg from '../../Assets/logos.png';
import { Features } from '../../components/Features';

export function Home() {
    return(
        <div className='container-home'>
            <div className="title">
                <h1>
                    Simplifique o
                    <br />
                    <span>seu sistema ERP</span>
                </h1>
                <h6>
                Nunca foi tão fácil automatizar seus relatórios e 
                <br />  aprimorar as métricas de seu time!
                </h6>
                <Link to="/dashboard"><button className='btn-home'>Get Started</button> </Link> 
                </div>
                <img className='img-home' src={HomeImg} />
                <img className='logo-img' src={LogoImg} />

            <Features />
            </div>
    );
}

