import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Navbar/Navbar';
import Register from './Register/Register';
import Login from './Login/Login';
import UserList from './UserList/UserList';

function App() {

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<h1>Üdvözöllek a kezdőlapon!</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />


        </Routes>
      </div>
    </Router>
   
  )
}

export default App
