import React, { Component} from "react";
import {hot} from "react-hot-loader";

// class App extends Component{
//     render(){
//         return(
//             <div className="App">
//                 <h1> Helloadasdadasddadasdasd!asdasdadasd </h1>
//             </div>
//         );
//     }
// }

// export default hot(module)(App);

// import styles from './App.module.scss';
import Layout from "./hoc/Layout/Layout";
import Homepage from "./containers/homepage/Homepage";

const App = () => {
    return (
        <Layout>
            <Homepage/>
        </Layout>
    );
};

export default App;
