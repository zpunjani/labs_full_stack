import Header from '../header/header'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'
import Nav from './nav/Nav'

// renders the general page structure

export function Layout() {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}