import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./containers/homepage/Homepage";
import Career from "./containers/career/Career"
import Contact from "./containers/contact/Contact";

const App = () => {
    return (
        <Layout headerClass={'contact'}>
            {/*<Homepage/>*/}
            {/*<Career headerClass={'career'}/>*/}
            <Contact headerClass={'contact'} />
        </Layout>
    );
};

export default hot(module)(App)
