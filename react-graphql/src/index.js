import React from 'react';

const wrapper = document.querySelector("[data-react-page]")
const page = wrapper ? wrapper.dataset.reactPage : null
import regeneratorRuntime from "regenerator-runtime";

if(page) {
    const pages = {
        home: import('./pages/home')
    }
    
    async function renderPage(name) {
        // Lazily load the requested page.
        const page = await pages[name]
        return page.default()
    }
    
    renderPage(page);
}