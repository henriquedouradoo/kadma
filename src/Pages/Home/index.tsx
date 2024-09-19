
import { Link } from 'react-router-dom';
import './styles.css';

export function Home() {
    return(
        <div className='container-home'>
            <div className="title">
                <h1>
                    Automatizando seu ERP 
                    <div className="border"></div>
                    <span>Inove sua empresa!</span>
                </h1>
                <Link to="/pricing"><button className='btn-home'>COMECE AGORA!</button> </Link> 
                </div>
            </div>
    );
}

