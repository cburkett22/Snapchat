import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import Preview from "./components/Preview/Preview";
import Chats from './components/Chats/Chats';
import ChatView from './components/ChatView/ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './components/Login/Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
        }))
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
            <img
              className="app__logo"
              src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
              alt="Snapchat logo"
            />
            <div className="app__body">
              <div className="app__bodyBackground">
                <Switch>
                  <Route path="/chats/view">
                    <ChatView />
                  </Route>
                  <Route path="/chats">
                    <Chats />
                  </Route>
                  <Route path="/preview">
                    <Preview />
                  </Route>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                </Switch>
              </div>
            </div>
            <div className="app__bodyInstructions">
              <h1>Instructions:</h1>
              <h3>1. Click the small gray circle to take a snap</h3>
              <h3>2. Smile for the camera and click the circle again!</h3>
              <h3>3. Click the "X" in the top left hand corner to re-take another snap</h3>
              <h3>4. If it looks good, click "Send Now" on the bottom</h3>
              <h3>5. Click the most recent snap with the red square on the right to view your selfie</h3>
              <h3>(After 10 seconds passes OR you click the screen you, or anyone else, will NOT be able to view the snap again!)</h3>
              <h3>6. Lastly, click your avatar picture at the very top left to Sign Out</h3>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;