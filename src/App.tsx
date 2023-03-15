import { eventNames } from 'process';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from '@/components/navbar/Navbar';
import Leftbar from '@/components/sidebar/Leftbar';
import { HomePage } from '@/pages/HomePage';
import { ContactPage } from './pages/ContactPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;