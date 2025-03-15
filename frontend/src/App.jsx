import {useEffect} from 'react';
import Navbar from "./components/navbar.jsx";
import HomePage from "./pages/homePage.jsx";
import SignUpPage from './pages/signUpPage.jsx';
import LoginPage from './pages/loginPage.jsx';
import SettingsPage from './pages/settingsPage.jsx';
import ProfilePage from './pages/profilePage.jsx';

import {Toaster} from "react-hot-toast";
import {Loader} from "lucide-react"


import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore.js';
import { useThemeStore } from './store/useThemeStore.js';


const App = () => {

  const {authUser,checkAuth, isCheckingAuth} = useAuthStore();
  const {theme} = useThemeStore();
  useEffect(()=>{checkAuth()},[checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser){
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }

  return (
    <div data-theme = {theme}>
      

      
      <BrowserRouter>
      <Navbar/>
      <Routes>
          
        <Route path="/" element={authUser? <HomePage/> : <Navigate  to="/signup"/> }/>
        <Route path="/login" element={!authUser? <LoginPage/> : <Navigate to="/" />}/>
        <Route path="/signup" element={!authUser? <SignUpPage/>: <Navigate to="/" />}/>
        <Route path="/profile" element={authUser? <ProfilePage/> : <Navigate  to="/signup"/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
      </Routes>
      </BrowserRouter>

      <Toaster />
    </div>
  )
}

export default App;