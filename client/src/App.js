import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import UserList from "./components/UserList";
import SignupForm from "./components/SignupForm";
import Conversation from "./components/Conversation";
import ConversationList from "./components/ConversationList";
import Message from "./components/Message";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {

  return (

      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route exact path="/users" element={<UserList />} />

          <Route exact path="/signup" element={<SignupForm />} />

          <Route exact path="/conversations/:id" element={<Conversation />} />

          <Route exact path="/conversations" element={<ConversationList />} />
        
          <Route exact path="/messages/:conversationId" element={<Message />} />
        </Routes>
      </div>

  );
}

export default App;