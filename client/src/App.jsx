import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';

export default function App() {
  const routes = [
    { path: '/', element: <Home />, isPrivate: false },
    { path: '/sign-in', element: <SignIn />, isPrivate: false },
    { path: '/sign-up', element: <SignUp />, isPrivate: false },
    { path: '/dashboard', element: <Dashboard />, isPrivate: true },
    { path: '/profile', element: <Profile />, isPrivate: true },
  ];

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          route.isPrivate ? (
            <Route key={index} element={<PrivateRoute />}>
              <Route path={route.path} element={route.element} />
            </Route>
          ) : (
            <Route key={index} path={route.path} element={route.element} />
          )
        ))}
      </Routes>
    </BrowserRouter>
  );
}
