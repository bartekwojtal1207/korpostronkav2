import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./containers/homepage/Homepage";
import Career from "./containers/career/Career"
import Contact from "./containers/contact/Contact";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Layout headerClass={'contact'}>
                <Route path="/public" exact>
                    <Homepage/>
                </Route>

                <Route path="/public" exact>
                    <Career headerClass={'career'}/>
                </Route>

                <Route path="/public" exact>
                    <Contact headerClass={'contact'} />
                </Route>
            </Layout>
        </BrowserRouter>
    );
};

export default hot(module)(App)