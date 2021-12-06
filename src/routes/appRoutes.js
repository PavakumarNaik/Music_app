import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import AlbumDetail from '../components/AlbumDetail';
import Header from '../components/Header'
import SignUpContainer from '../components/singupContainer'
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
            <Header/>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/playlist/:name" component={AlbumDetail} />
            <Route path="/signUp" component={SignUpContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;