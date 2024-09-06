import { Router } from "../../../Router";
import './styles.css';

export function Home() {
    return (
        <div>
            <Router />
            <div className="title">
                <h1>Automatizando seu ERP <div className="border"></div>
                    <br /><span>Reinvente-se!</span>
                </h1>
            </div>
        </div>
    )
}