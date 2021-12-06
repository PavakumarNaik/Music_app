
import './App.css';
import AppRouter from './routes/appRoutes'
import {AlbumProvider}  from './context/AlbumContext';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
function App() {
  return (
    <AlbumProvider>
       <div className="App">
         <MuiThemeProvider>
      <AppRouter/>
      </MuiThemeProvider>
    </div>
    </AlbumProvider>
   
  );
}

export default App;
