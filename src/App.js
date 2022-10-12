import { Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './componets/login/ForgotPassword';
import Login from './componets/login/Login';
import LoginPage from './componets/login/LoginPage';
import SignUpPage from './componets/login/SignUpPage';
import Registation from './componets/registation/Registation';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}>
          <Route index element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Route>
        <Route path='/successfully' element={<Registation />} />
      </Routes>
    </div>
  );
}

export default App;
