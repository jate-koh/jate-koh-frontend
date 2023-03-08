import { eventNames } from 'process';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from '@/components/navbar/Navbar';


function App() {
    return(
        <NavigationBar />
    )
}

export default App