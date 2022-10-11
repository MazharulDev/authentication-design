import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './componets/login/Login';
import LoginPage from './componets/login/LoginPage';
import SignUpPage from './componets/login/SignUpPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}>
          <Route index element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
