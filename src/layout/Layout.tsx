import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet /> {/*Это место, где будет рендериться компотенты страниц */}
        </>
    )
}