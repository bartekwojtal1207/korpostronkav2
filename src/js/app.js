import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./containers/homepage/Homepage";
import Career from "./containers/career/Career"

const App = () => {
    return (
        <Layout headerClass={'career'}>
            {/*<Homepage/>*/}
            <Career headerClass={'career'}/>
        </Layout>
    );
};

export default hot(module)(App)
