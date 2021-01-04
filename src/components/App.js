import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
// eslint-disable-next-line import/no-named-as-default
import ArticlePage from "./article/ArticlePage";
import SearchPage from "./search/SearchPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <ToastContainer/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage}/>
        <Route path="/article/:id" component={ArticlePage}/>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
