import Header from '../header/header'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'

// renders the general page structure

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}