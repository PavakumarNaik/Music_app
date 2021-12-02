
import './App.css';
import AppRouter from './routes/appRoutes'
import {AlbumProvider}  from './context/AlbumContext';

function App() {
  return (
    <AlbumProvider>
       <div className="App">
      <AppRouter/>
    </div>
    </AlbumProvider>
   
  );
}

export default App;
