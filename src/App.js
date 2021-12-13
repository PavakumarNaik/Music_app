
import './App.css';
import AppRouter from './routes/appRoutes'
import {AlbumProvider}  from './context/AlbumContext';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { LanguageProvider } from './context/languageprovider-context';
import { AuthProvider } from './context/auth-context';

function App() {
  return (
    <LanguageProvider >
    <AlbumProvider>
    <AuthProvider >
       <div className="App">
         <MuiThemeProvider>
      <AppRouter/>
      </MuiThemeProvider>
    </div>
    </AuthProvider>
    </AlbumProvider>
    </LanguageProvider>
  );
}

export default App;
