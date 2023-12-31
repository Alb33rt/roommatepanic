import { useEffect, useState } from 'react';

import 'firebase/auth';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import PageBody from "./components/PageBody";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithCustomToken, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from './firebase-config';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import ManageRoommates from './pages/ManageRoommates'
import Stats from './pages/Stats'

const App = () => {

  const [userProfile, setUserProfile] = useState({
    loggedIn: false,
    username: '',
  });

  useEffect(() => {
    let username = localStorage.getItem('username')
    console.log("Running")
    if (username) {
      setUserProfile({
        loggedIn: true,
        username: username
      })
    }
  }, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then( (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const token = credential.accessToken;
        setUserProfile({
          loggedIn: true,
          username: result.user.displayName,
        });
        localStorage.setItem('username', user.displayName);
    })
    .catch( (error) => {
        console.log(error);
    })
  }

  const signOutWithGoogle = () => {
      signOut(auth)
      .then((result) => {
          console.log("Logged Out");   
          setUserProfile({
            loggedIn: false,
            username: '',
          });
          localStorage.removeItem('username');
      })
      .catch((error) => {
          console.log(error);
      })
  }

  return (
    <BrowserRouter>
    <NavBar handleLogin={signInWithGoogle} handleLogout={signOutWithGoogle} userProfile={userProfile} />
    { userProfile.loggedIn ? 
    <Routes>
        <Route path="" element={ userProfile.loggedIn ? <Dashboard /> : <Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/manageroommates" element={<ManageRoommates />} />
        <Route path="/stats" element={<Stats />} />
    </Routes> :
    <Home />
    }

    </BrowserRouter>
  );
}

export default App;