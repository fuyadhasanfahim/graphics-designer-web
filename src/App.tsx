import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/navbar/Navbar';
import HomePage from './pages/home/HomePage';
import PricePage from './pages/price/PricePage';
import ContactPage from './pages/contact/ContactPage';
import FreeTrail from './pages/freeTrails/FreeTrail';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import BackgroundRemovalService from './pages/services/BackgroundRemovalService';
import LoginPage from './pages/registration/LoginPage';
import SignUpPage from './pages/registration/SignUpPage';
import Error from './components/error/Error';
import Footer from './components/shared/footer/Footer';
import useAuthCheck from './hooks/useAuthCheck';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import AccountSettings from './pages/accountSettings/AccountSettings';
import DashBoardPage from './pages/dashboard/DashBoardPage';
import DashAccountSettings from './pages/accountSettings/DashAccountSettings';
import CreateOrder from './pages/create-order/CreateOrderPage';

const App: React.FC = () => {
    const authChecked = useAuthCheck();

    return (
        <>
            {!authChecked ? (
                <div className="h-dvh flex justify-center items-center bg-white">
                    <img
                        className="h-16 w-16"
                        src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
                        alt=""
                    />
                </div>
            ) : (
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/pricing" element={<PricePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/free-trail" element={<FreeTrail />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route
                            path="/services/:component"
                            element={<BackgroundRemovalService />}
                        />
                        <Route
                            path="/account-settings"
                            element={
                                <PrivateRoute>
                                    <AccountSettings />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <DashBoardPage />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/dashboard/create-order"
                            element={
                                <PrivateRoute>
                                    <CreateOrder />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/dashboard/update-info"
                            element={
                                <PrivateRoute>
                                    <DashAccountSettings />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <PublicRoute>
                                    <LoginPage />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/sign-up"
                            element={
                                <PublicRoute>
                                    <SignUpPage />
                                </PublicRoute>
                            }
                        />
                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            )}
        </>
    );
};

export default App;
