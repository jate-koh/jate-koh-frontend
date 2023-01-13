import * as React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import { App } from '@/App';

const node: HTMLElement | null = document.getElementById('app') || document.createElement('div');
const root = createRoot(node);

const renderRoot = (Application: any): void => {
    root.render(
        //<Provider store={''}>
            //<BrowserRouter>
                <Application />
            //</BrowserRouter>
        //</Provider>
    );
};

renderRoot(App);