import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { GlobalStyle } from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "../styles/themes";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export const Layout = () => {
    const theme = useSelector((state: RootState) => state.themeList.theme)


    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle theme={theme} />
                <Header />
                <Outlet /> {/*Это место, где будет рендериться компотенты страниц */}
            </ThemeProvider>
        </>
    )
}