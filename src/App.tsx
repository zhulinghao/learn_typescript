import React, { lazy, Suspense, Component } from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import './App.css'
// components
const GlobalHeader = lazy(() => import('./components/GlobalHeader'));
const GlobalContent = lazy(() => import('./components/GlobalContent'));
// pages
const SearchResult = lazy(() => import('./pages/SearchResult'));
const Home = lazy(() => import('./pages/Home'));
const CartoonDetail = lazy(() => import('./pages/CartoonDetail'));
const NotFound = lazy(() => import('./pages/404'));
const Category = lazy(() => import('./pages/Category'));

class MainRoute extends Component { 

  loading() {
    return (<div>
      Loading...
    </div>)
  }
  render(){
    return(
      <>
        <HashRouter>
          <Suspense fallback={this.loading()}>
            <GlobalHeader></GlobalHeader>
            <GlobalContent>
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/home" exact component={Home}/>
                  <Route path="/cartoon/:id" exact component={CartoonDetail}/>
                  <Route path="/search/:searchValue" exact component={SearchResult}/>
                  <Route path="/category" exact component={Category}/>
                  <Route path="*" exact component={NotFound}/>
              </Switch>
            </GlobalContent>
          </Suspense>
        </HashRouter>
      </>
    )
  }
}

export default MainRoute;