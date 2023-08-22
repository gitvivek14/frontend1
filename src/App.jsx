import logo from './logo.svg';
import Bet from './components/Bet';
import { Header } from './components/Header';
import Login from './pages/Login';
import {Route,Routes, useNavigate} from 'react-router-dom'
import Game from './pages/Game'
import {useSelector } from 'react-redux/es/hooks/useSelector';
import PrivateRoute from './components/PrivateRoute';
import Endgame from './pages/Endgame';
function App() {
  const navigate = useNavigate()
  const {signupData} = useSelector((state)=>state.auth)
  // Hey, a popstate event happened!
window.addEventListener("popstate", e => {
  // Nope, go back to your page
  navigate('/')
});
  return (
   <div className='w-[100vw] h-[100vh] min-h-screen overflow-y-auto'>
    <Routes>
      <Route path='/' element={
          <Login></Login>
      }>
      </Route>
      <Route path='/game' element={
        <PrivateRoute>
           <Game></Game>
        </PrivateRoute>
     }>

     </Route>

     <Route path='/endgame' element={<Endgame></Endgame>}>
     </Route>
    </Routes> 
   </div>
  );
}
export default App;
