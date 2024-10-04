import './styles.css';
import Deleitte from '../../Assets/deleitte.png';

export function Testemunha() {
    return (
        <div className="testemunha-container">
            <div className="padding">
            <div className="text">
                <h5>“kadma is a great product! All of my most important information is there - dashboards, business, process automations, and more. And I don't need to worry because it's all in one place! thanks!”</h5>
            </div>
           <img src={Deleitte} />
            </div>
        </div>
    )
}