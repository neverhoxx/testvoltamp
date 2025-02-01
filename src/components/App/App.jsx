import React from 'react';
import { AppRoutes } from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const App = () => {
    return (
        <div className='wrapper'>
            <Header />
            <AppRoutes />
            <Footer />
        </div>
    )
}

export default App;
