import * as React from 'react';

import {BrowserRouter} from "react-router-dom";

import Header from "./components/Header";
// @ts-ignore
import Navbar from "./components/Navbar";

// @ts-ignore
import {GlobalStyle, SWrapper} from './styles';
// @ts-ignore
import Routes from './routes';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header sitename="Test Microservice"/>
                <Navbar />
                <SWrapper>
                    <React.Suspense fallback={"Loading"}>
                        <Routes />
                    </React.Suspense>
                </SWrapper>
            </BrowserRouter>
        </>
    )
}

export default App;
