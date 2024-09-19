import './styles.css'
import { useClerk } from "@clerk/clerk-react";
import { HeaderDashboard } from "../../components/Header-Dashboard";

export function Dashboard() {
    const { user } = useClerk();

    return(
        <>
        <HeaderDashboard />
        <div className="container-dashboard">
        <h2>Bem-vindo, {user?.firstName}.</h2>
        </div>
        </>
    )
}
