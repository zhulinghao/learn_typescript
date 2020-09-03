import React, { Component } from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'
// components
// const GlobalHeader = lazy(() => import('./components/GlobalHeader'));
import GlobalHeader from './components/GlobalHeader';
// const GlobalContent = lazy(() => import('./components/GlobalContent'));
import GlobalContent from './components/GlobalContent';
import NotFound from './pages/404';
// pages
import SearchResult from './pages/SearchResult'
import Home from './pages/Home'
import CartoonDetail from './pages/CartoonDetail'
// const NotFound = lazy(() => import('./pages/404'));
import Category from './pages/Category'

// 注册 & 登录
import Login from './pages/Account/Login'
import Register from './pages/Account/Register'

// const ReplaceHomeFunction: FC = ()  => {
//   const history = useHistory();
//   history.replace('/index')
//   return (
//     <></>
//   )
// }


class MainRoute extends Component {
  loading() {
    return (<div>
      Loading...
    </div>)
  }

  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/index" />
            </Route>
            <Route path="/index">
              <>
                <GlobalHeader></GlobalHeader>
                <GlobalContent>
                  <Route path="/" exact component={Home} />
                  <Route path="/index" exact component={Home} />
                  <Route path="/index/cartoon/:id" exact component={CartoonDetail} />
                  <Route path="/index/category" exact component={Category} />
                  <Route path="/index/search/:searchValue" exact component={SearchResult} />
                </GlobalContent>
              </>
            </Route>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </HashRouter>
      </>
    )
  }
}

export default MainRoute;