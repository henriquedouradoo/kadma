import { FormLogin } from "../../../components/Forms/Login";
import './styles.css'

export function Login() {
    return(
        <div>
        <div className="container-right">
            <h3 className="title">
                LOGIN
            </h3>
            <FormLogin />
        </div>
        <div className="svg-left-circle">
                
                <svg width="351" height="624" viewBox="0 0 351 624" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="-51" cy="350" rx="402" ry="350" fill="#FFDD00"/>
                <ellipse cx="-51" cy="350" rx="176.937" ry="154.049" fill="#161616"/>
                </svg>
    
                </div>
        </div>
    )
}