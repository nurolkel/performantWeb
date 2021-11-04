import React from 'react';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typograhpy';
import Navbar from './NavBar';
import Footer from './Footer';


export default function Layout({ children }) {
    return (
        <>
        <GlobalStyles />
        <Typography />
        <Navbar />
        {children}
        <Footer />
        </>
        );
        
}