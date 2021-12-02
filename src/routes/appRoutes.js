import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import AlbumDetail from '../components/AlbumDetail';
import Header from '../components/Header'
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
            <Header/>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/detailPage" component={AlbumDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;