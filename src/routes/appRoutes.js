import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import AlbumDetail from '../components/AlbumDetail';
import Header from '../components/Header'
import LandingPage from '../components/landingPage';
import MyAccount from '../components/myAccount';
import UpdateProfile from '../components/updateProfile'
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
            <Header/>
          <Switch>
            <Route path="/" component={LandingPage} exact={true} />
            <Route exact path="/users/myAccount" component={MyAccount} />
            <Route exact path="/users/updateProfile" component={UpdateProfile} />
            <Route exact path="/:name" component={Home} />
            <Route exact path="/:CategoryName/:name" component={AlbumDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;