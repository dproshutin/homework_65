import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PageLoader from "./containers/PageLoader/PageLoader";
import PageEditor from "./containers/PageEditor/PageEditor";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/pages/admin" exact component={PageEditor}/>
                    <Route path="/pages/:page" exact render={props => {
                        return <PageLoader {...props} />
                    }}/>
                    <Route path="/" exact render={props => {
                        return <PageLoader {...props} />
                    }}/>
                    <Route render={() => {
                        return (
                            <div style={{textAlign: "center"}}>
                                <h1>404 <br/> Page Not Found!</h1>
                            </div>
                        );
                    }}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
