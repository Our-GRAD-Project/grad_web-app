import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';
import MySummaries from './pages/MySummaries';
import BookDetails from './pages/BookDetails';
import ProfilePage from './pages/ProfilePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Notifications from './pages/Notifications';
import CategoryBooks from './pages/CategoryBooks';
// import BookDetails from './pages/BookDetails';
import ForgotPassword from './pages/ForgotPassword';
import CheckEmail from './pages/CheckEmail';
import ResetPassword from './pages/ResetPassword';
import SuccessReset from "./pages/SuccessReset";
import VerifyCode from './pages/VerifyCode';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/my-library" element={<MyLibrary />} />
          <Route path="/my-summaries" element={<MySummaries />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/category/:categoryId" element={<CategoryBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-success" element={<SuccessReset />} />
          <Route path="/verify-code" element={<VerifyCode />} />


        </Route>
      </Routes>
    </Router>
  );
};

export default App;