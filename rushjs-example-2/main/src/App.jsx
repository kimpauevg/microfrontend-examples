import React from 'react';
import {BrowserRouter, Switch} from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import {GlobalStyle, SWrapper} from './styles';
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
                        <Switch>
                            <Routes />
                        </Switch>
                    </React.Suspense>
                </SWrapper>
            </BrowserRouter>
        </>
    )
}

export default App;
