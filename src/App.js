
import { Outlet } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';


const App = () => {

  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}
export default App;
