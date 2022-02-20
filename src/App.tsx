import React from 'react';
import './App.scss';
import {MainPage} from "./pages/MainPage/MainPage"
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import {Ecomarket} from "./pages/Ecomarket/Ecomarket";
import {BaseLayout} from "./pages/BaseLayout/BaseLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/ecomarket" element={<BaseLayout children="hello"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
