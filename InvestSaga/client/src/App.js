import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoute';
import Profile from './pages/user/Profile';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Users from './pages/Admin/Users';
import Financeground from './pages/Auth/Financeground';
import LevelsPage from './pages/levels/level';
import HangmanGame from './pages/games/Hangman/HangmanGame';
import WordSearch from './pages/games/wordSearch/wordSearch';
import MovingBanner from './pages/MovingBanner';
import FAQs from './pages/Faqs';
import Quiz from './pages/games/Trivia/quiz';
import Lesson from './pages/Lesson';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <HomePage/> } />

      <Route path="/dashboard" element={<PrivateRoute/>  }>
          <Route path="user" element={ <Dashboard/> } />
          <Route path="user/profile" element={ <Profile/> } />
      </Route>

      <Route path="/dashboard" element={<AdminRoute/>}>
           <Route path="admin" element={<AdminDashboard/>}/>
           <Route path="admin/users" element={<Users/>}/>

      </Route>
      <Route path='/lesson' element={<Lesson/>}/>
      <Route path='/faqs' element={<FAQs/>}/>
      <Route path='/trivia' element={<Quiz/>} />
      <Route path='/banner' element={<MovingBanner/>}/>
      <Route path='/hangman' element={<HangmanGame/>}/>
      <Route path='/wordsearch' element={<WordSearch/>}/>
      <Route path='/level' element={<LevelsPage/>}/>
      <Route path="/financeground" element={<Financeground/>}/>
      <Route path="/register" element={ <Register/> } />
      <Route path="/forgot-password" element={ <ForgotPassword/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/contact" element={ <Contact/> } />
      <Route path="/policy" element={ <Policy/> } />
      <Route path="*" element={ <Pagenotfound/> } />
    </Routes> 
    </>
  );
}

export default App;