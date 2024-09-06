import { FormLogin } from "../../../components/Forms/Login";
import './styles.css'

export function Login() {
    return(
        <div className="container-right">
            <h3 className="title">
                LOGIN
            </h3>
            <FormLogin />
        </div>
    )
}