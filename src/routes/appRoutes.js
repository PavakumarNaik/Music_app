import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import AlbumDetail from '../components/AlbumDetail';
import Header from '../components/Header'
import SignUpContainer from '../components/singupContainer';
import LoginContainer from '../components/loginContainer'
import LandingPage from '../components/landingPage';
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
            <Header/>
          <Switch>
            <Route path="/" component={LandingPage} exact={true} />
            <Route exact path="/signUp" component={SignUpContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/:name" component={Home} />
            <Route exact path="/:CategoryName/:name" component={AlbumDetail} />
           
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default AppRouter;