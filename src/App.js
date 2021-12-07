
import './App.css';
import AppRouter from './routes/appRoutes'
import {AlbumProvider}  from './context/AlbumContext';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { LanguageProvider } from './context/languageprovider-context';
function App() {
  return (
    <LanguageProvider >
    <AlbumProvider>
       <div className="App">
         <MuiThemeProvider>
      <AppRouter/>
      </MuiThemeProvider>
    </div>
    </AlbumProvider>
    </LanguageProvider>
  );
}

export default App;
