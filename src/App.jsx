import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Chat from './pages/Chat';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Logout/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </Router>
  )
}