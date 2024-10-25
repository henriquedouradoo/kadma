import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Clerk from "./components/clerk";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";

export function Router() {
    return (
        <>
        <BrowserRouter>
        <Routes>
        <Route Component={ HeroSection } path="/" exact />
        <Route Component={ Clerk } path="/login" />
        <Route Component={ FeatureSection } path="/diferenciais" />
        <Route Component={ Workflow } path="/trabalho" />
        <Route Component={ Pricing } path="/precos" />
        </Routes>
        </BrowserRouter>
        </>
    )
}