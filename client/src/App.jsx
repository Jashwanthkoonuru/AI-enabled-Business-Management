import { useState, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { ThemeProvider, CssBaseline, CircularProgress, Box } from '@mui/material';
import theme from './components/footer/Theme.jsx';
const LoginPage = lazy(() => import('./pages/loginpage/LoginPage.jsx'));
const SignupPage = lazy(() => import('./pages/signup/SignupPage.jsx'));
const EmployeeDashboard = lazy(() => import('./pages/dashboard/EmployeeDashboard.jsx'));
const HRDashboard = lazy(() => import('./pages/dashboard/HrDashboard.jsx'));
const ManagerDashboard = lazy(() => import('./pages/dashboard/ManagerDashboard.jsx'));
const Navbar = lazy(() => import('./components/Navbar.jsx'));
const AboutUs = lazy(() => import('./pages/navbarItems/AboutUs.jsx'));
const Home = lazy(() => import('./components/home/Home.jsx'));
const Contact = lazy(() => import('./pages/navbarItems/Contact.jsx'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute.jsx'));
const Loader = () => (
  <Box className="flex justify-center items-center min-h-screen">
    <CircularProgress />
  </Box>
);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
            <Route path="/hrDashboard" element={<HRDashboard />} />
            <Route path="/managerDashboard" element={<ManagerDashboard />} />
            {/* <Route path="/employeeDashboard" element={<ProtectedRoute allowedRoles={['Employee']} ><EmployeeDashboard /></ProtectedRoute>} />
            <Route path="/hrDashboard" element={<ProtectedRoute allowedRoles={['Hr']} ><HRDashboard /></ProtectedRoute>} />
            <Route path="/managerDashboard" element={<ProtectedRoute allowedRoles={['Manager']} ><ManagerDashboard /> </ProtectedRoute>} /> */}
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
