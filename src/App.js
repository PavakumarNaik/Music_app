import React, { Component } from "react";
import AppRouter from "./routes/appRoutes";
import { AlbumProvider } from "./context/AlbumContext";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { LanguageProvider } from "./context/languageprovider-context";
import { AuthProvider } from "./context/auth-context";
import { Provider } from 'react-redux';
import ConfigureStore from './redux/store/store'
import "./App.css";


const store = ConfigureStore();
class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <LanguageProvider>
          <AlbumProvider>
            <AuthProvider>
              <div className="App">
                <MuiThemeProvider>
                  <AppRouter />
                </MuiThemeProvider>
              </div>
            </AuthProvider>
          </AlbumProvider>
        </LanguageProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
