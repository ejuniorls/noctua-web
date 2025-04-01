import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layouts
import AdminLayout from '../layouts/AdminLayout';
import BlogLayout from '../layouts/BlogLayout';

// Auth
import ForgotPassword from '../pages/auth/forgot-password/ForgotPassword';
import ResetPassword from '../pages/auth/reset-password/ResetPassword';
import SignIn from '../pages/auth/sign-in/SignIn';
import SignUp from '../pages/auth/sign-up/SignUp';

// Admin Pages
import Dashboard from '../pages/admin/dashboard/Dashboard';
import Settings from '../pages/admin/settings/Settings';

// Module - Blog
import BlogHome from '../pages/blog/home/Home';
import BlogPost from '../pages/blog/post/Post';

// Errors
import Error401 from '../pages/error/error-401/Error401';
import Error403 from '../pages/error/error-403/Error403';
import Error404 from '../pages/error/error-404/Error404';
import Error500 from '../pages/error/error-500/Error500';
import Error502 from '../pages/error/error-502/Error502';
import Error503 from '../pages/error/error-503/Error503';
import Error504 from '../pages/error/error-504/Error504';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Auth */}
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="reset-password" element={<ResetPassword />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />

                {/* Admin */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                {/* Module - Blog */}
                <Route path="/" element={<BlogLayout />}>
                    <Route index element={<BlogHome />} />
                    <Route path="post/:slug" element={<BlogPost />} />
                </Route>

                {/* Errors */}
                <Route path="/unauthorized" element={<Error401 />} />
                <Route path="/forbidden" element={<Error403 />} />
                <Route path="/not-Found" element={<Error404 />} />
                <Route path="/internal-server-error" element={<Error500 />} />
                <Route path="/bad-gateway" element={<Error502 />} />
                <Route path="/service-unavailable" element={<Error503 />} />
                <Route path="/gateway-timeout" element={<Error504 />} />

                {/* Routes not defined */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;